/**
 * A library of string related functions.
 * @module @moss/string
 */

// MARK: Library
// --------------------------------------------------------------------------------------
/**
 * Capitalizes the first letter of a string.
 * @param str The string to capitalize.
 */
export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Converts a dash case string to a camel case string.
 * @param str The string to convert.
 */
export function dashToCamelCase(str: string) {
  return str.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
}

/**
 * Converts a camel case string to a dash case string.
 * @param str The string to convert.
 */
export function camelToDashCase(str: string) {
  return str.replace(/([A-Z])/g, (_, c) => `-${c.toLowerCase()}`);
}

/**
 * Converts a string with spaces to a camel case string.
 * @param str The string to convert.
 */
export function textToCamelCase(str: string) {
  return str.replace(/ ([a-z])/g, (_, c) => c.toUpperCase());
}
