import { promises as fs } from 'fs';
import { dirname } from 'path';

const args = process.argv.slice(2);
const DRY_RUN = args.includes('--dry-run') || args.includes('-d');
const VERBOSE = args.includes('--verbose') || args.includes('-v');

async function run() {
  const designersTokens = await readJsonIfExists('tokens.json');

  let palette,
    light,
    dark,
    unifiedTheme,
    unifiedDeprecated,
    lightDeprecated,
    darkDeprecated;

  if (designersTokens) {
    if (designersTokens['Color Palette/Color']) {
      palette = designersTokens['Color Palette/Color'];
      if (VERBOSE) console.log('Using tokens.json → "Color Palette/Color"');
    } else {
      palette = await readJsonRequired('tokens/Color Palette/Color.json');
    }

    light =
      designersTokens['Themes/Light'] ??
      designersTokens['Themes/Light.json'] ??
      null;
    dark =
      designersTokens['Themes/Dark'] ??
      designersTokens['Themes/Dark.json'] ??
      null;

    unifiedTheme =
      designersTokens['Themes/Theme'] ??
      designersTokens['Themes/Theme.json'] ??
      null;

    let sampleUnified =
      designersTokens['Themes/Theme.sample'] ??
      designersTokens['Themes/Theme.sample.json'] ??
      null;

    if (!unifiedTheme && DRY_RUN && !sampleUnified) {
      sampleUnified = await readJsonIfExists('tokens/Themes/Theme.sample.json');
    }
    if (!unifiedTheme && DRY_RUN && sampleUnified) {
      unifiedTheme = sampleUnified;
      if (VERBOSE)
        console.log('Using tokens.json → Themes/Theme.sample for dry-run');
    }

    unifiedDeprecated =
      designersTokens['Deprecated/Theme'] ??
      designersTokens['Deprecated/Theme.json'] ??
      null;

    lightDeprecated =
      designersTokens['Deprecated/Light'] ??
      designersTokens['Deprecated/Light.json'] ??
      null;

    darkDeprecated =
      designersTokens['Deprecated/Dark'] ??
      designersTokens['Deprecated/Dark.json'] ??
      null;

    if (VERBOSE) console.log('Loaded tokens from designers tokens.json');
  } else {
    palette = await readJsonRequired('tokens/Color Palette/Color.json');
    light = await readJsonIfExists('tokens/Themes/Light.json');
    dark = await readJsonIfExists('tokens/Themes/Dark.json');

    unifiedTheme = await readJsonIfExists('tokens/Themes/Theme.json');
    const sampleUnified = await readJsonIfExists(
      'tokens/Themes/Theme.sample.json'
    );
    if (!unifiedTheme && DRY_RUN && sampleUnified) {
      unifiedTheme = sampleUnified;
      if (VERBOSE)
        console.log('Using tokens/Themes/Theme.sample.json for dry-run');
    }

    unifiedDeprecated = await readJsonIfExists('tokens/Deprecated/Theme.json');
    lightDeprecated = await readJsonIfExists('tokens/Deprecated/Light.json');
    darkDeprecated = await readJsonIfExists('tokens/Deprecated/Dark.json');
  }

  const validation = validateTokens({
    palette,
    unifiedTheme,
    unifiedDeprecated,
    light,
    dark,
    lightDeprecated,
    darkDeprecated,
  });

  if (validation.errors.length) {
    console.error('Token validation errors:');
    for (const e of validation.errors) console.error('  -', e);
    if (!DRY_RUN) {
      process.exitCode = 1;
      return;
    }
    console.warn('Continuing (dry-run). Fix before merging.');
  } else if (VERBOSE) {
    console.log('Token validation passed.');
  }
  if (VERBOSE && validation.warnings.length) {
    console.warn('Validation warnings:');
    for (const w of validation.warnings) console.warn('  -', w);
  }

  await ensureDir('src/scss/variables');

  let paletteContent = ':root {\n';
  paletteContent += loopTokens({ json: palette, theme: false });
  paletteContent += '}\n';
  await writeMaybe('src/scss/variables/colorPalette.scss', paletteContent);

  let semanticContent = ':root {\n';

  if (unifiedTheme) {
    semanticContent += loopTokens({
      json: unifiedTheme,
      theme: true,
      unifiedRoot: unifiedTheme,
      resolveDarkFromUnified: true,
    });
    if (unifiedDeprecated) {
      semanticContent += loopTokens({
        json: unifiedDeprecated,
        theme: true,
        unifiedRoot: unifiedDeprecated,
        deprecated: true,
        resolveDarkFromUnified: true,
      });
    }
  } else {
    semanticContent += loopTokens({ json: light || {}, theme: true });
    if (lightDeprecated && darkDeprecated) {
      semanticContent += loopTokens({
        json: lightDeprecated,
        theme: true,
        deprecated: true,
      });
    }
  }

  semanticContent += '}\n';
  await writeMaybe('src/scss/variables/colorSemantic.scss', semanticContent);

  if (VERBOSE) {
    console.log('Done.');
  }
}

function isTokenNode(n) {
  return n && typeof n === 'object' && 'type' in n && 'value' in n;
}
function isRef(v) {
  return typeof v === 'string' && v.trim().startsWith('{');
}

function cleanKey(key) {
  return String(key).toLowerCase().split(' ').join('-');
}

function cleanRefValue(token) {
  return String(token || '')
    .toLowerCase()
    .split(' ')
    .join('-')
    .split('.')
    .join('-')
    .replace(/[{}]/g, '');
}

function normalizeFinalValue(v) {
  return typeof v === 'string' ? v : String(v ?? '');
}

function getFrom(obj, keys) {
  let cur = obj;
  for (const k of keys) cur = cur?.[k];
  return cur;
}

function resolveTokenValue(node, which) {
  const v = node?.value;
  if (typeof v === 'string') return v;

  if (v && typeof v === 'object') {
    if (v.modes && typeof v.modes === 'object') {
      return v.modes[which] ?? v.modes.light ?? '';
    }
    if ('light' in v || 'dark' in v) {
      return v[which] ?? v.light ?? '';
    }
  }

  if (node?.modes && typeof node.modes === 'object') {
    return node.modes[which] ?? node.modes.light ?? '';
  }
  if (which in (node || {})) return node[which];

  return v ?? '';
}

function formatForCss(val, prefix) {
  if (isRef(val)) {
    const ref = cleanRefValue(val);
    return `var(${prefix}-${ref})`;
  }
  return String(val);
}

function valuesDiffer(lightVal, darkVal) {
  return (
    normalizeFinalValue(lightVal).trim() !== normalizeFinalValue(darkVal).trim()
  );
}

function loopTokens(opts) {
  const {
    json,
    theme = false,
    deprecated = false,
    category = '',
    keys = [],
    unifiedRoot = null,
    resolveDarkFromUnified = false,
  } = opts;

  let content = '';

  for (const [key, value] of Object.entries(json || {})) {
    if (isTokenNode(value)) {
      const token = cleanKey(key);
      const prefix = `--kd-${value.type}`;
      const attr = `${prefix}${category}-${token}`;

      const lightRaw = resolveTokenValue(value, 'light');

      let darkRaw = lightRaw;
      if (theme) {
        if (resolveDarkFromUnified && unifiedRoot) {
          const node = getFrom(unifiedRoot, [...keys, key]);
          darkRaw = resolveTokenValue(node ?? value, 'dark');
          if (!darkRaw) darkRaw = lightRaw;
        } else {
          const darkNode = getFrom(
            deprecated ? globalDarkDeprecated : globalDark,
            keys
          )?.[key];
          darkRaw = (darkNode && darkNode.value) ?? lightRaw;
        }
      }

      let finalVal;

      if (theme && valuesDiffer(lightRaw, darkRaw)) {
        const lightCss = formatForCss(lightRaw, prefix);
        const darkCss = formatForCss(darkRaw, prefix);
        finalVal = `light-dark(${lightCss}, ${darkCss})`;
      } else if (isRef(lightRaw)) {
        finalVal = formatForCss(lightRaw, prefix);
      } else {
        finalVal = String(lightRaw);
      }

      content += `  ${attr}: ${normalizeFinalValue(finalVal)};\n`;
    } else if (value && typeof value === 'object') {
      const newKeys = [...keys, key];
      const newCategory = `${category}-${cleanKey(key)}`;
      content += loopTokens({
        json: value,
        theme,
        deprecated,
        category: newCategory,
        keys: newKeys,
        unifiedRoot,
        resolveDarkFromUnified,
      });
    }
  }

  return content;
}

let globalDark = null;
let globalDarkDeprecated = null;

async function writeMaybe(path, text) {
  if (DRY_RUN) {
    console.log(`\n--- DRY RUN: ${path} ---\n`);
    console.log(text);
    return;
  }
  await ensureDir(dirname(path));
  await fs.writeFile(path, text);
}

async function ensureDir(dir) {
  try {
    await fs.mkdir(dir, { recursive: true });
  } catch {
    // ignore errors
  }
}

async function readJsonIfExists(path) {
  try {
    const s = await fs.readFile(path, 'utf8');
    return JSON.parse(s);
  } catch {
    return null;
  }
}
async function readJsonRequired(path) {
  const s = await fs.readFile(path, 'utf8');
  return JSON.parse(s);
}

function validateTokens(files) {
  const errors = [];
  const warnings = [];

  function checkNode(pathStack, node) {
    if (!node || typeof node !== 'object') return;
    for (const [k, v] of Object.entries(node)) {
      const path = pathStack ? `${pathStack}.${k}` : k;
      if (isTokenNode(v)) {
        if (!v.type || typeof v.type !== 'string')
          errors.push(`${path}: missing string 'type'`);
        if (!('value' in v)) errors.push(`${path}: missing 'value'`);
        const val = v.value;
        const isOkString = typeof val === 'string';
        const isOkModes =
          val &&
          typeof val === 'object' &&
          ('modes' in val || 'light' in val || 'dark' in val);
        if (!isOkString && !isOkModes) {
          warnings.push(
            `${path}: unexpected 'value' shape (expected string or light/dark/modes object)`
          );
        }
      } else if (v && typeof v === 'object') {
        checkNode(path, v);
      }
    }
  }

  try {
    checkNode('palette', files.palette);
  } catch (e) {
    errors.push('palette: ' + (e?.message || 'validation failed'));
  }

  for (const [name, obj] of [
    ['unifiedTheme', files.unifiedTheme],
    ['unifiedDeprecated', files.unifiedDeprecated],
    ['light', files.light],
    ['dark', files.dark],
    ['lightDeprecated', files.lightDeprecated],
    ['darkDeprecated', files.darkDeprecated],
  ]) {
    if (!obj) continue;
    try {
      checkNode(name, obj);
    } catch (e) {
      errors.push(`${name}: ` + (e?.message || 'validation failed'));
    }
  }

  return { errors, warnings };
}

run()
  .then(() => {})
  .catch((err) => {
    console.error('build-tokens.js failed:', err);
    process.exit(1);
  });

Object.defineProperty(global, 'setLegacy', {
  value: (d, dd) => {
    globalDark = d;
    globalDarkDeprecated = dd;
  },
});

(async () => {
  const designersTokens = await readJsonIfExists('tokens.json');
  let d = null;
  let dd = null;
  if (designersTokens) {
    d =
      designersTokens['Themes/Dark'] ??
      designersTokens['Themes/Dark.json'] ??
      null;
    dd =
      designersTokens['Deprecated/Dark'] ??
      designersTokens['Deprecated/Dark.json'] ??
      null;
  } else {
    d = await readJsonIfExists('tokens/Themes/Dark.json');
    dd = await readJsonIfExists('tokens/Deprecated/Dark.json');
  }
  globalDark = d;
  globalDarkDeprecated = dd;
})();
