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

export const BREAKPOINT_VIEWPORTS = {
  sm: {
    name: 'Breakpoint: Small',
    styles: {
      width: '320px',
      height: '100%',
    },
  },
  md: {
    name: 'Breakpoint: Medium',
    styles: {
      width: '672px',
      height: '100%',
    },
  },
  lg: {
    name: 'Breakpoint: Large',
    styles: {
      width: '1184px',
      height: '100%',
    },
  },
  xl: {
    name: 'Breakpoint: X-Large',
    styles: {
      width: '1312px',
      height: '100%',
    },
  },
  max: {
    name: 'Breakpoint: Max',
    styles: {
      width: '1584px',
      height: '100%',
    },
  },
};
