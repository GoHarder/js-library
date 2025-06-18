/**
 * A library of array related functions.
 * @module @moss/array
 */

// MARK: Library
// --------------------------------------------------------------------------------------
/**
 * Creates an incrementing range of numbers.
 * @param start The start of the range.
 * @param end The end of the range.
 * @param step The step size.
 */
function range(start: number, end: number, step: number = 1) {
  return Array.from({ length: (end - start) / step + 1 }, (_, i) => start + i * step);
}
