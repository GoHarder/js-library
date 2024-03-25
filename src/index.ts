/**
 * A library of array related functions.
 * @packageDocumentation
 */

/**
 * Creates an incremented number array.
 * @param start - The start of the range.
 * @param end - The end of the range.
 */
export const range = (start: number, end: number) => Array.from({ length: end - start }, (_, i) => start + i);
