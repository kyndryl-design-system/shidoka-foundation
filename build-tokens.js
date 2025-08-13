import { promises } from 'fs';

async function run() {
  // fetch token files and convert to json
  const palette = JSON.parse(
    await promises.readFile('tokens/Color Palette/Color.json', 'utf8')
  );
  const light = await readJsonIfExists('tokens/Themes/Light.json');
  const dark = await readJsonIfExists('tokens/Themes/Dark.json');
  const unifiedTheme = await readJsonIfExists('tokens/Themes/Theme.json');
  const unifiedDeprecated = await readJsonIfExists(
    'tokens/Deprecated/Theme.json'
  );
  const lightDeprecated = await readJsonIfExists(
    'tokens/Deprecated/Light.json'
  );
  const darkDeprecated = await readJsonIfExists('tokens/Deprecated/Dark.json');

  // build and write css files
  async function buildCss() {
    // build palette variables file
    let paletteContent = ':root {\n';
    // recurse through json token structure
    paletteContent += loopTokens(palette);
    paletteContent += '}';
    // write palette css file
    await promises.writeFile(
      'src/scss/variables/colorPalette.scss',
      paletteContent
    );

    // build semantic variables file
    let semanticContent = ':root {\n';
    // recurse through json token structure
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
    // write semantic css file
    await promises.writeFile(
      'src/scss/variables/colorSemantic.scss',
      semanticContent
    );
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

  // get dark value by looping through keys
  function getDarkValue(keys, curKey, deprecated) {
    let darkVal = deprecated ? darkDeprecated : dark;
    keys.forEach((key) => {
      darkVal = darkVal ? darkVal[key] : undefined;
    });
    return darkVal ? darkVal[curKey] : undefined;
  }

  // clean json keys for use as css variable attributes
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
    let node = getByPath(root, [...keys, curKey]);
    const sameNodeDark = resolveTokenValue(node, 'dark');
    if (sameNodeDark && String(sameNodeDark).trim() !== '') return sameNodeDark;

    const idx = keys.indexOf('light');
    if (idx !== -1) {
      const altKeys = keys.slice();
      altKeys[idx] = 'dark';
      const darkNode = getByPath(root, [...altKeys, curKey]);
      if (darkNode) {
        const candidate =
          resolveTokenValue(darkNode, 'light') ||
          (darkNode && darkNode.value) ||
          '';
        if (candidate && String(candidate).trim() !== '') return candidate;
      }
    }

    const fallbackLight =
      resolveTokenValue(getByPath(root, [...keys, curKey]), 'light') || '';
    return fallbackLight;
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

  function getByPath(obj, path) {
    let cur = obj;
    for (const k of path) {
      if (!cur) return undefined;
      cur = cur[k];
    }
    return cur;
  }
}

run();
