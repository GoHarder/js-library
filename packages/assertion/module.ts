/**
 * Assertion functions for various data types.
 * @module @moss/assertion
 */

// MARK: Library
// --------------------------------------------------------------------------------------
/**
 * Asserts that the given value is a boolean.
 * @param value The value to assert.
 */
export function isBoolean(value: unknown): value is boolean {
  return typeof value === 'boolean';
}

/**
 * Asserts that the given value is a number.
 * @param value The value to assert.
 */
export function isNumber(value: unknown): value is number {
  return typeof value === 'number' && !isNaN(value);
}

/**
 * Asserts that the given value is a finite number.
 * @param value The value to assert.
 */
export function isFiniteNumber(value: unknown): value is number {
  return isNumber(value) && isFinite(value);
}

/**
 * Asserts that the given value is an integer.
 * @param value The value to assert.
 */
export function isInteger(value: unknown): value is number {
  return isNumber(value) && value % 1 === 0;
}

/**
 * Asserts that the given value is an array.
 * @param value The value to assert.
 */
export function isArray<T>(value: unknown): value is T[] {
  return Array.isArray(value);
}

/**
 * Asserts that the given value is an object.
 * @param value The value to assert.
 */
export function isObject<T extends Record<string | number | symbol, any>>(value: unknown): value is T {
  return typeof value === 'object' && !Array.isArray(value);
}

/**
 * Asserts that the given value is a non-empty string.
 * @param value The value to assert.
 */
export function isString(value: unknown): value is string {
  return typeof value === 'string';
}

/**
 * Asserts that the given value is a non-empty string.
 * @param value The value to assert.
 */
export function isNonEmptyString(value: unknown): value is string {
  return isString(value) && value.length > 0;
}
