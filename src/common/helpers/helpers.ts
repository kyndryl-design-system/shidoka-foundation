export const debounce = (fn: Function, ms = 100) => {
  let timer: ReturnType<typeof setTimeout>;
  return function (e: Event) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(e), ms);
  };
};

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

/**
 * Get the current breakpoint from CSS variable.
 * Used for conditional logic and/or rendering in component JS
 * by matching the current breakpoint with values defined in common/defs/breakpoints.
 */
export function getCurrentBreakpoint() {
  return getComputedStyle(document.documentElement).getPropertyValue(
    '--kd-current-breakpoint'
  );
}
