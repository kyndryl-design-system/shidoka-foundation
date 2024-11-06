export const stringToReactHtml = (string: String) => {
  return { __html: string };
};

/**
 * Convert an object to an array of only its values.
 * Used when importing enums in component stories for populating argType dropdowns.
 * @param {*} options
 *  imported enums object
 */
export function createOptionsArray(options: object = {}) {
  const optionsArray: Array<string> = [];

  Object.keys(options).map((key) => {
    optionsArray.push(options[key as keyof typeof options]);
  });

  return optionsArray;
}

export function getTokens(json: object, category = '') {
  let tokens: Array<any> = [];

  for (const [key, value] of Object.entries(json)) {
    if (value.$value) {
      const prefix = `--kd-${value.$type}`;
      const token = cleanKey(key);
      // set variable attribute
      const variable = `${prefix}${category}-${token}`;

      tokens.push(variable);
    } else {
      const newCategory = category + `-${cleanKey(key)}`;
      tokens = [...tokens, ...getTokens(value, newCategory)];
    }
  }

  return tokens;
}

function cleanKey(key: string) {
  return key.toLowerCase().split(' ').join('-');
}
