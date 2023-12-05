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
