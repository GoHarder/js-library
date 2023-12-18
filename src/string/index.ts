/**
 * A library of string related functions.
 * @packageDocumentation
 */

/**
 * Capitalizes a string.
 * @param str - The string to capitalize.
 * @public
 */
export const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

/**
 * Converts a string from dash case to camel case.
 * @param str - The string to convert.
 * @public
 */
export const dashToCamelCase = (str: string) => {
  const replacer = (group: string) => group.replace('-', '').toUpperCase();
  return str.replace(/(-[a-z])/g, replacer);
};
