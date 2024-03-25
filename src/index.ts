/**
 * A library of string related functions.
 * @packageDocumentation
 */

/**
 * Capitalizes a string.
 * @param str - The string to capitalize.
 */
export const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

/**
 * Converts a string from dash case to camel case.
 * @param str - The string to convert.
 */
export const dashToCamelCase = (str: string) => {
  const replacer = (substring: string) => substring.replace('-', '').toUpperCase();
  return str.replace(/(-[a-z])/g, replacer);
};

/**
 * Converts a string to dash case.
 * @param str - The string to convert.
 */
export const toDashCase = (str: string) => {
  str = str.replace(/(^[A-Z])/, ([first]) => first.toLowerCase());
  return str.replace(/([A-Z])/g, ([letter]) => `-${letter.toLowerCase()}`);
};

/**
 * Converts a string to camel case.
 * @param string - The string to convert.
 */
export const toCamelCase = (str: string) => {
  const replacer = (substring: string, index: number) => {
    if (+substring === 0) return '';
    return index === 0 ? substring.toLowerCase() : substring.toUpperCase();
  };
  return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, replacer);
};
