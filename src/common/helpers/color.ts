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

const LIGHT_DARK_PREFIX = 'light-dark(';

function isLightDarkFunction(value: string): boolean {
  const normalized = value.trim().toLowerCase();
  return normalized.startsWith(LIGHT_DARK_PREFIX) && normalized.endsWith(')');
}

/**
 * Split `light-dark(light, dark)` into channels without breaking on commas inside
 * nested functions such as `rgb(1, 2, 3)`.
 */
function parseLightDark(value: string): { light: string; dark: string } | null {
  const trimmed = value.trim();
  if (!isLightDarkFunction(trimmed)) {
    return null;
  }

  const inner = trimmed.slice(LIGHT_DARK_PREFIX.length, -1);
  let depth = 0;
  let commaIndex = -1;

  for (let i = 0; i < inner.length; i++) {
    const char = inner[i];
    if (char === '(') {
      depth++;
    } else if (char === ')') {
      depth--;
    } else if (char === ',' && depth === 0) {
      commaIndex = i;
      break;
    }
  }

  if (commaIndex === -1) {
    return null;
  }

  const light = inner.slice(0, commaIndex).trim();
  const dark = inner.slice(commaIndex + 1).trim();
  if (!light || !dark) {
    return null;
  }

  return { light, dark };
}

function preferDarkScheme(): boolean {
  const scheme = getColorScheme();
  if (scheme === 'dark') {
    return true;
  }
  if (scheme === 'light dark') {
    return getPreferredColorScheme() === 'dark';
  }
  return false;
}

function supportsLightDark(): boolean {
  return (
    typeof CSS !== 'undefined' &&
    typeof CSS.supports === 'function' &&
    CSS.supports('color', 'light-dark(#000, #fff)')
  );
}

/**
 * Resolve `var(--token)` through the cascade so the browser evaluates `light-dark()`.
 */
function resolveTokenColorViaProbe(token: string): string {
  const probe = document.createElement('span');
  probe.style.color = `var(${token})`;
  document.documentElement.appendChild(probe);
  const resolved = getComputedStyle(probe).color.trim();
  probe.remove();
  return resolved;
}

/**
 * Resolve a design-token CSS custom property to a concrete color for the active
 * color scheme.
 *
 * Prefers cascade resolution (`var(--token)` → computed `color`) so browsers that
 * already evaluate `light-dark()` are not broken by string-splitting. Falls back to
 * parsing a literal `light-dark(light, dark)` value when needed.
 *
 * @param token - CSS custom property name, e.g. `--kd-color-background-ui`.
 * @returns A concrete color string (often `rgb(...)` or `#RRGGBB`).
 * @throws If the token is missing/empty or cannot be resolved.
 *
 * Ensure `<meta name="color-scheme" content="light dark">` (or `light` / `dark`)
 * is present when tokens use `light-dark()`.
 */
export function getTokenThemeVal(token: string): string {
  if (typeof document === 'undefined') {
    throw new Error(
      `getTokenThemeVal('${token}') requires a browser document environment.`
    );
  }

  const raw = getComputedStyle(document.documentElement)
    .getPropertyValue(token)
    .trim();

  if (!raw) {
    throw new Error(
      `getTokenThemeVal('${token}'): CSS custom property is not defined or is empty.`
    );
  }

  // Engine already returned a concrete color — do not string-split it.
  if (!isLightDarkFunction(raw)) {
    return raw;
  }

  // Literal light-dark(...): prefer cascade resolution when the engine supports it.
  if (supportsLightDark()) {
    const probed = resolveTokenColorViaProbe(token);
    if (probed && !isLightDarkFunction(probed)) {
      return probed;
    }
  }

  // Fallback: pick a channel from meta / prefers-color-scheme.
  const parsed = parseLightDark(raw);
  if (parsed) {
    return preferDarkScheme() ? parsed.dark : parsed.light;
  }

  throw new Error(
    `getTokenThemeVal('${token}'): could not resolve color from value "${raw}".`
  );
}
