/**
 * The function `getColorScheme` retrieves the content of the meta tag with the name "color-scheme"
 * from the document.
 * @returns The `getColorScheme` function returns the content attribute value of the meta tag with the
 * name "color-scheme" from the document.
 */
export function getColorScheme() {
  return document
    .querySelector('meta[name="color-scheme"]')
    ?.getAttribute('content');
}

/**
 * The function `getPreferredColorScheme` determines the preferred color scheme (dark or light) based
 * on the user's system settings.
 * @returns The `getPreferredColorScheme` function returns either 'dark' if the user prefers a dark
 * color scheme, 'light' if the user prefers a light color scheme, or 'light' if the browser does not
 * support `window.matchMedia`.
 */
export function getPreferredColorScheme() {
  if (window.matchMedia) {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    } else {
      return 'light';
    }
  }

  return 'light';
}

/**
 * The function `getTokenThemeVal` retrieves the appropriate color value based on the current color
 * scheme and preferred color scheme.
 * @param {string} token - The `getTokenThemeVal` function takes a `token` parameter, which is a string
 * representing a CSS variable name. The function retrieves the computed value of the CSS variable
 * specified by the `token` parameter and returns the appropriate color value based on the color scheme
 * (light or dark) and preferred color
 * @returns The `getTokenThemeVal` function returns the appropriate color value based on the color
 * scheme and preferred color scheme. If the color scheme is 'light dark' and the preferred color
 * scheme is 'dark', it returns the second color from the `lightDarkColors` array. If the color scheme
 * is 'light dark' and the preferred color scheme is not 'dark', it returns the first color from the
 */
export function getTokenThemeVal(token: string) {
  const computedValue = getComputedStyle(
    document.documentElement
  ).getPropertyValue(token);

  const lightDarkColors = computedValue
    .split('light-dark(')
    .join('')
    .split(')')
    .join('')
    .split(', ');

  if (getColorScheme() === 'light dark') {
    if (getPreferredColorScheme() === 'dark') {
      return lightDarkColors[1];
    } else {
      return lightDarkColors[0];
    }
  } else if (getColorScheme() === 'dark') {
    return lightDarkColors[1];
  } else {
    return lightDarkColors[0];
  }
}
