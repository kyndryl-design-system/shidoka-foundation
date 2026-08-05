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
const HEX_COLOR_PATTERN =
  /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/;
const CSS_COLOR_FUNCTION_PATTERN =
  /^(?:rgba?|hsla?|hwb|lab|lch|oklab|oklch|color)\(/i;
const CSS_VAR_PATTERN =
  /^var\(\s*(--[\w-]+)\s*(?:,\s*((?:[^()]+|\([^()]*\))*))?\s*\)$/i;

function isLightDarkFunction(value: string): boolean {
  const normalized = value.trim().toLowerCase();
  return normalized.startsWith(LIGHT_DARK_PREFIX) && normalized.endsWith(')');
}

function isHexColor(value: string): boolean {
  return HEX_COLOR_PATTERN.test(value.trim());
}

function isCssColorFunction(value: string): boolean {
  return CSS_COLOR_FUNCTION_PATTERN.test(value.trim());
}

/**
 * Split `light-dark(light, dark)` into channels without breaking on commas inside
 * nested functions such as `rgb(1, 2, 3)` or `var(--token, fallback)`.
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
 * Used only when a concrete authored channel (especially hex) is unavailable.
 */
function resolveTokenColorViaProbe(token: string): string {
  const probe = document.createElement('span');
  probe.style.color = `var(${token})`;
  document.documentElement.appendChild(probe);
  const resolved = getComputedStyle(probe).color.trim();
  probe.remove();
  return resolved;
}

function warnUnresolved(token: string, detail: string): void {
  if (typeof console !== 'undefined' && typeof console.warn === 'function') {
    console.warn(`getTokenThemeVal('${token}'): ${detail}`);
  }
}

/**
 * Resolve a channel or concrete color value without forcing rgb() when hex is available.
 * Preserves `#RRGGBB` so consumers that append hex alpha (e.g. `color + '80'`) keep working.
 */
function resolveColorValue(
  value: string,
  originalToken: string,
  seen: Set<string>
): string {
  const trimmed = value.trim();
  if (!trimmed) {
    return '';
  }

  if (isHexColor(trimmed) || isCssColorFunction(trimmed)) {
    return trimmed;
  }

  if (isLightDarkFunction(trimmed)) {
    const parsed = parseLightDark(trimmed);
    if (!parsed) {
      return '';
    }
    const channel = preferDarkScheme() ? parsed.dark : parsed.light;
    return resolveColorValue(channel, originalToken, seen);
  }

  const varMatch = trimmed.match(CSS_VAR_PATTERN);
  if (varMatch) {
    const nestedToken = varMatch[1];
    const fallback = varMatch[2]?.trim();

    if (seen.has(nestedToken)) {
      warnUnresolved(
        originalToken,
        `circular custom property reference at "${nestedToken}".`
      );
      return fallback ? resolveColorValue(fallback, originalToken, seen) : '';
    }

    seen.add(nestedToken);
    const nestedRaw = getComputedStyle(document.documentElement)
      .getPropertyValue(nestedToken)
      .trim();

    if (nestedRaw) {
      const resolvedNested = resolveColorValue(nestedRaw, nestedToken, seen);
      if (resolvedNested) {
        return resolvedNested;
      }
    }

    if (fallback) {
      return resolveColorValue(fallback, originalToken, seen);
    }

    return '';
  }

  // Last resort: cascade probe (typically yields rgb()/rgba()).
  if (supportsLightDark()) {
    const probed = resolveTokenColorViaProbe(originalToken);
    if (probed && !isLightDarkFunction(probed)) {
      return probed;
    }
  }

  return trimmed;
}

/**
 * Resolve a design-token CSS custom property to a concrete color for the active
 * color scheme.
 *
 * Resolution order is intentionally charts-safe:
 * 1. Return already-resolved concrete colors as-is (do not string-split them).
 * 2. For literal `light-dark(...)`, pick the scheme channel with a paren-aware
 *    parser and preserve hex when present (so `color + '80'` keeps working).
 * 3. Resolve nested `var(--token)` channels.
 * 4. Probe via computed `color` only when a authored hex/channel is unavailable.
 *
 * Missing tokens return `''` (with a console warning) to preserve existing
 * falsy fallbacks such as `getTokenThemeVal(token) || hex`.
 *
 * @param token - CSS custom property name, e.g. `--kd-color-background-ui`.
 * @returns A concrete color string (preferably `#RRGGBB` when authored that way),
 * or `''` when unresolved.
 *
 * Ensure `<meta name="color-scheme" content="light dark">` (or `light` / `dark`)
 * is present when tokens use `light-dark()`.
 */
export function getTokenThemeVal(token: string): string {
  if (typeof document === 'undefined') {
    warnUnresolved(token, 'requires a browser document environment.');
    return '';
  }

  const raw = getComputedStyle(document.documentElement)
    .getPropertyValue(token)
    .trim();

  if (!raw) {
    warnUnresolved(token, 'CSS custom property is not defined or is empty.');
    return '';
  }

  const resolved = resolveColorValue(raw, token, new Set([token]));
  if (!resolved) {
    warnUnresolved(token, `could not resolve color from value "${raw}".`);
    return '';
  }

  return resolved;
}
