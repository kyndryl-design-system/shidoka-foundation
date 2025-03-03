import { promises } from 'fs';

async function run() {
  // fetch token files and convert to json
  const palette = JSON.parse(
    await promises.readFile('tokens/Color Palette/Color.json', 'utf8')
  );
  const light = JSON.parse(
    await promises.readFile('tokens/Themes/Light.json', 'utf8')
  );
  const dark = JSON.parse(
    await promises.readFile('tokens/Themes/Dark.json', 'utf8')
  );
  const lightDeprecated = JSON.parse(
    await promises
      .readFile('tokens/Deprecated/Light.json', 'utf8')
      .catch(function () {
        return null;
      })
  );
  const darkDeprecated = JSON.parse(
    await promises
      .readFile('tokens/Deprecated/Dark.json', 'utf8')
      .catch(function () {
        return null;
      })
  );

  // build and write css files
  async function buildCss() {
    // build palette variables file
    let paletteContent = ':root {\n';
    // recurse through json token structure
    paletteContent += loopTokens(palette);
    paletteContent += '}';
    // write palette css file
    promises.writeFile('src/scss/variables/colorPalette.scss', paletteContent);

    // build semantic variables file
    let semanticContent = ':root {\n';
    // recurse through json token structure
    semanticContent += loopTokens(light, true);
    if (lightDeprecated && darkDeprecated) {
      semanticContent += loopTokens(lightDeprecated, true, true);
    }
    semanticContent += '}';
    // write semantic css file
    promises.writeFile(
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
    keys = []
  ) {
    let content = '';

    for (const [key, value] of Object.entries(json)) {
      if (value.$value) {
        const prefix = `--kd-${value.$type}`;
        // build css variables syntax
        const token = cleanKey(key);
        // set variable attribute
        const attr = `${prefix}${category}-${token}`;
        // palette token reference
        let val = cleanValue(value.$value);

        // if value is a reference to another variable
        if (value.$value.startsWith('{')) {
          if (theme) {
            // set variable value using css light-dark() syntax
            const darkRef = getDarkValue(keys, key, deprecated);
            const darkVal = cleanValue(darkRef.$value);
            if (darkVal.startsWith('#')) {
              // handle if darkVal is hex instead of token
              val = `light-dark(var(${prefix}-${val}), ${darkVal})`;
            } else {
              val = `light-dark(var(${prefix}-${val}), var(${prefix}-${darkVal}))`;
            }
          } else {
            // set variable value
            val = `var(${prefix}-${val})`;
          }
        }

        // write variable
        content += `  ${attr}: ${val};\n`;
      } else {
        // update category string and parent keys arr
        let newKeys = JSON.parse(JSON.stringify(keys));
        newKeys.push(key);
        let newCategory = category + `-${cleanKey(key)}`;

        // recurse through sub-level and write sub-level variables
        content += loopTokens(value, theme, deprecated, newCategory, newKeys);
      }
    }

    return content;
  }

  // get dark value by looping through keys
  function getDarkValue(keys, curKey, deprecated) {
    let darkVal = deprecated ? darkDeprecated : dark;
    keys.forEach((key) => {
      darkVal = darkVal[key];
    });
    return darkVal[curKey];
  }

  // clean json eys for use as css variable attributes
  function cleanKey(key) {
    return key.toLowerCase().split(' ').join('-');
  }

  // clean json values for use as css variable values
  function cleanValue(token) {
    return token
      .toLowerCase()
      .split(' ')
      .join('-')
      .split('.')
      .join('-')
      .split('{')
      .join('')
      .split('}')
      .join('');
    // .split('(')
    // .join('-')
    // .split(')')
    // .join('');
  }

  await Promise.all([
    palette,
    light,
    dark,
    lightDeprecated,
    darkDeprecated,
  ]).then(buildCss());
}

run();
