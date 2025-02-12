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
    semanticContent += '}';
    // write semantic css file
    promises.writeFile(
      'src/scss/variables/colorSemantic.scss',
      semanticContent
    );
  }

  // recursively loop though json structure to generate css variable syntax
  function loopTokens(json, theme = false, category = '', keys = []) {
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
            const darkRef = getDarkValue(keys, key);
            const darkVal = cleanValue(darkRef.$value);
            val = `light-dark(var(${prefix}-${val}), var(${prefix}-${darkVal}))`;
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
        content += loopTokens(value, theme, newCategory, newKeys);
      }
    }

    return content;
  }

  // get dark value by looping through keys
  function getDarkValue(keys, curKey) {
    let darkVal = dark;
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

  await Promise.all([palette, light, dark]).then(buildCss());
}

run();
