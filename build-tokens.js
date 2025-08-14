import { promises } from 'fs';

const args = process.argv.slice(2);
const DRY_RUN = args.includes('--dry-run') || args.includes('-d');
const VERBOSE = args.includes('--verbose') || args.includes('-v');

async function run() {
  // fetch token files and convert to json
  const palette = JSON.parse(
    await promises.readFile('tokens/Color Palette/Color.json', 'utf8')
  );
  const light = await readJsonIfExists('tokens/Themes/Light.json');
  const dark = await readJsonIfExists('tokens/Themes/Dark.json');

  let unifiedTheme = await readJsonIfExists('tokens/Themes/Theme.json');
  const sampleUnified = await readJsonIfExists(
    'tokens/Themes/Theme.sample.json'
  );
  if (!unifiedTheme && DRY_RUN && sampleUnified) {
    unifiedTheme = sampleUnified;
    if (VERBOSE)
      console.log('Using tokens/Themes/Theme.sample.json for dry-run');
  }

  const unifiedDeprecated = await readJsonIfExists(
    'tokens/Deprecated/Theme.json'
  );
  const lightDeprecated = await readJsonIfExists(
    'tokens/Deprecated/Light.json'
  );
  const darkDeprecated = await readJsonIfExists('tokens/Deprecated/Dark.json');

  const toValidate = {
    palette,
    unifiedTheme,
    unifiedDeprecated,
    light,
    dark,
    lightDeprecated,
    darkDeprecated,
  };

  const validation = validateTokens(toValidate);

  if (validation.errors.length > 0) {
    console.error('Token validation errors found:');
    validation.errors.forEach((e) => console.error('  -', e));
    if (!DRY_RUN) {
      process.exitCode = 1;
      return;
    } else {
      console.warn(
        'Continuing because this is a dry-run. Fix errors before writing files for production use.'
      );
    }
  } else if (VERBOSE) {
    console.log('Token validation passed (no errors).');
  }

  async function buildCss() {
    let paletteContent = ':root {\n';
    paletteContent += loopTokens(palette);
    paletteContent += '}';
    if (DRY_RUN) {
      console.log('\n--- DRY RUN: src/scss/variables/colorPalette.scss ---\n');
      console.log(paletteContent);
    } else {
      await promises.writeFile(
        'src/scss/variables/colorPalette.scss',
        paletteContent
      );
    }

    let semanticContent = ':root {\n';

    if (unifiedTheme) {
      semanticContent += loopTokens(
        unifiedTheme,
        true,
        false,
        '',
        [],
        'light',
        unifiedTheme
      );
      if (unifiedDeprecated) {
        semanticContent += loopTokens(
          unifiedDeprecated,
          true,
          true,
          '',
          [],
          'light',
          unifiedDeprecated
        );
      }
    } else {
      semanticContent += loopTokens(light || {}, true);
      if (lightDeprecated && darkDeprecated) {
        semanticContent += loopTokens(lightDeprecated, true, true);
      }
    }
    semanticContent += '}';
    if (DRY_RUN) {
      console.log('\n--- DRY RUN: src/scss/variables/colorSemantic.scss ---\n');
      console.log(semanticContent);
    } else {
      await promises.writeFile(
        'src/scss/variables/colorSemantic.scss',
        semanticContent
      );
    }
  }

  // recursively loop though json structure to generate css variable syntax
  function loopTokens(
    json,
    theme = false,
    deprecated = false,
    category = '',
    keys = [],
    mode = 'light',
    unifiedRoot = null
  ) {
    let content = '';

    for (const [key, value] of Object.entries(json || {})) {
      if (isTokenNode(value)) {
        const prefix = `--kd-${value.type}`;
        const token = cleanKey(key);
        const attr = `${prefix}${category}-${token}`;

        let resolvedLight = resolveTokenValue(value, 'light');
        let val = cleanValue(resolvedLight);

        if (isReference(resolvedLight)) {
          if (theme) {
            let darkCandidate;
            if (unifiedRoot) {
              darkCandidate = resolveUnifiedDark(unifiedRoot, keys, key);
            } else {
              const darkRef = getDarkValue(keys, key, deprecated);
              darkCandidate = darkRef ? darkRef.value : resolvedLight;
            }
            const darkVal = cleanValue(darkCandidate);
            if (darkVal.startsWith('#')) {
              val = `light-dark(var(${prefix}-${val}), ${darkVal})`;
            } else {
              val = `light-dark(var(${prefix}-${val}), var(${prefix}-${darkVal}))`;
            }
          } else {
            val = `var(${prefix}-${val})`;
          }
        }

        content += `  ${attr}: ${normalizeFinalValue(val)};\n`;
      } else {
        let newKeys = JSON.parse(JSON.stringify(keys));
        newKeys.push(key);
        let newCategory = category + `-${cleanKey(key)}`;
        content += loopTokens(
          value,
          theme,
          deprecated,
          newCategory,
          newKeys,
          mode,
          unifiedRoot
        );
      }
    }

    return content;
  }

  function getDarkValue(keys, curKey, deprecated) {
    let darkVal = deprecated ? darkDeprecated : dark;
    keys.forEach((key) => {
      darkVal = darkVal ? darkVal[key] : undefined;
    });
    return darkVal ? darkVal[curKey] : undefined;
  }

  function cleanKey(key) {
    return key.toLowerCase().split(' ').join('-');
  }

  // clean json values for use as css variable values
  function cleanValue(token) {
    return String(token || '')
      .toLowerCase()
      .split(' ')
      .join('-')
      .split('.')
      .join('-')
      .split('{')
      .join('')
      .split('}')
      .join('');
  }

  await buildCss();

  function isTokenNode(node) {
    return (
      node && typeof node === 'object' && 'value' in node && 'type' in node
    );
  }

  function isReference(val) {
    return typeof val === 'string' && val.trim().startsWith('{');
  }

  function resolveTokenValue(node, which) {
    const v = node && node.value;
    if (typeof v === 'string') return v;
    if (v && typeof v === 'object') {
      if ('modes' in v && v.modes && typeof v.modes === 'object') {
        return v.modes[which] ?? v.modes.light ?? '';
      }
      if ('light' in v || 'dark' in v) {
        return v[which] ?? v.light ?? '';
      }
    }
    if ('modes' in node && node.modes && typeof node.modes === 'object') {
      return node.modes[which] ?? node.modes.light ?? '';
    }
    if (which in node) return node[which];
    return v || '';
  }

  function resolveUnifiedDark(root, keys, curKey) {
    let node = root;
    for (const k of keys) {
      node = node && node[k];
    }
    node = node && node[curKey];
    if (!node) return '';
    const dark = resolveTokenValue(node, 'dark');
    if (dark && String(dark).trim() !== '') return dark;
    const light = resolveTokenValue(node, 'light');
    return light || '';
  }

  async function readJsonIfExists(path) {
    try {
      const s = await promises.readFile(path, 'utf8');
      return JSON.parse(s);
    } catch (e) {
      return null;
    }
  }

  function normalizeFinalValue(v) {
    return typeof v === 'string' ? v : String(v || '');
  }
}

function validateTokens(files) {
  const errors = [];
  const warnings = [];

  function checkNode(pathStack, node) {
    if (!node || typeof node !== 'object') return;

    for (const [k, v] of Object.entries(node)) {
      const path = pathStack ? `${pathStack}.${k}` : k;
      if (v && typeof v === 'object' && 'type' in v && 'value' in v) {
        if (!v.type || typeof v.type !== 'string') {
          errors.push(`${path}: token missing string 'type'`);
        }
        if (!('value' in v)) {
          errors.push(`${path}: token missing 'value'`);
        } else {
          const val = v.value;
          if (
            typeof val !== 'string' &&
            !(
              val &&
              typeof val === 'object' &&
              ('modes' in val || 'light' in val || 'dark' in val)
            )
          ) {
            warnings.push(
              `${path}: token 'value' has unexpected shape (expected string or modes/light-dark object)`
            );
          }
        }
      } else if (v && typeof v === 'object') {
        checkNode(path, v);
      } else {
        if (v === null || v === undefined || v === '') {
          warnings.push(`${path}: empty value`);
        }
      }
    }
  }

  try {
    checkNode('palette', files.palette);
  } catch (e) {
    errors.push('palette: failed to validate - ' + e.message);
  }

  if (files.unifiedTheme) {
    try {
      checkNode('unifiedTheme', files.unifiedTheme);
    } catch (e) {
      errors.push('unifiedTheme: failed to validate - ' + e.message);
    }
  }

  if (files.unifiedDeprecated) {
    try {
      checkNode('unifiedDeprecated', files.unifiedDeprecated);
    } catch (e) {
      errors.push('unifiedDeprecated: failed to validate - ' + e.message);
    }
  }

  if (files.light) {
    try {
      checkNode('light', files.light);
    } catch (e) {
      errors.push('light: failed to validate - ' + e.message);
    }
  }
  if (files.dark) {
    try {
      checkNode('dark', files.dark);
    } catch (e) {
      errors.push('dark: failed to validate - ' + e.message);
    }
  }

  if (files.lightDeprecated) {
    try {
      checkNode('lightDeprecated', files.lightDeprecated);
    } catch (e) {
      errors.push('lightDeprecated: failed to validate - ' + e.message);
    }
  }
  if (files.darkDeprecated) {
    try {
      checkNode('darkDeprecated', files.darkDeprecated);
    } catch (e) {
      errors.push('darkDeprecated: failed to validate - ' + e.message);
    }
  }

  return { errors, warnings };
}

run().catch((err) => {
  console.error('build-tokens.js failed:', err);
  process.exit(1);
});
