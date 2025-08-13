import { promises as fs } from 'fs';

async function run() {
  const palette = JSON.parse(
    await fs.readFile('tokens/Color Palette/Color.json', 'utf8')
  );
  const unifiedTheme = await readJson('tokens/Themes/Theme.json');
  const unifiedDeprecated = await readJson('tokens/Deprecated/Theme.json');

  const paletteContent = `:root {\n${loopTokens(palette)}}`;
  await fs.writeFile('src/scss/variables/colorPalette.scss', paletteContent);

  let semanticContent = ':root {\n';
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
  semanticContent += '}';
  await fs.writeFile('src/scss/variables/colorSemantic.scss', semanticContent);

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
        const resolvedLight = resolveTokenValue(value, 'light');
        let val = cleanValue(resolvedLight);
        if (isReference(resolvedLight)) {
          if (theme && unifiedRoot) {
            const darkCandidate = resolveUnifiedDark(unifiedRoot, keys, key);
            const darkVal = cleanValue(darkCandidate);
            val = darkVal.startsWith('#')
              ? `light-dark(var(${prefix}-${val}), ${darkVal})`
              : `light-dark(var(${prefix}-${val}), var(${prefix}-${darkVal}))`;
          } else {
            val = `var(${prefix}-${val})`;
          }
        }
        content += `  ${attr}: ${normalizeFinalValue(val)};\n`;
      } else {
        const newKeys = [...keys, key];
        const newCategory = `${category}-${cleanKey(key)}`;
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
      if (v.modes && typeof v.modes === 'object')
        return v.modes[which] ?? v.modes.light ?? '';
      if ('light' in v || 'dark' in v) return v[which] ?? v.light ?? '';
    }
    if (node && node.modes && typeof node.modes === 'object')
      return node.modes[which] ?? node.modes.light ?? '';
    if (which in (node || {})) return node[which];
    return v || '';
  }

  function resolveUnifiedDark(root, keys, curKey) {
    const node = getByPath(root, [...keys, curKey]);
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

  function getByPath(obj, path) {
    let cur = obj;
    for (const k of path) {
      if (!cur) return undefined;
      cur = cur[k];
    }
    return cur;
  }

  function cleanKey(key) {
    return key.toLowerCase().split(' ').join('-');
  }

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

  function normalizeFinalValue(v) {
    return typeof v === 'string' ? v : String(v || '');
  }

  async function readJson(path) {
    try {
      const s = await fs.readFile(path, 'utf8');
      return JSON.parse(s);
    } catch {
      return null;
    }
  }
}

run();
