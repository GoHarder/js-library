/**
 * A library of math related functions.
 * @module @moss/math
 */

// MARK: Globals
// --------------------------------------------------------------------------------------

const trigRound = 0.000000000000001;

// MARK: Helpers
// --------------------------------------------------------------------------------------

/**
 * Returns the number of decimals in a number.
 * @param num The number to get the decimals of.
 */
function decimals(num: number) {
  return num.toString().split('.')[1]?.length || 0;
}

/**
 * The base implementation of rounding a number.
 * @param num The number to round.
 * @param inc The increment to round by.
 * @param method The method to use for rounding.
 */
function libRound(num: number, inc: number, method: 'round' | 'floor' | 'ceil') {
  if (inc === 0) return Math[method](num);
  const dec = decimals(inc);
  const value = Math[method]((num + Number.EPSILON) / inc) * inc;
  const str = parseFloat(`${value}`).toFixed(20);
  return Number(`${Math[method](Number(`${str}e${dec}`))}e-${dec}`);
}

// MARK: Library
// --------------------------------------------------------------------------------------

/**
 * Rounds a number to the nearest increment.
 * @param num The number to round.
 * @param inc The increment to round by.
 */
export function round(num: number, inc = 1) {
  return libRound(num, inc, 'round');
}

/**
 * Rounds a number down to the nearest increment.
 * @param num The number to round.
 * @param inc The increment to round by.
 */
export function floor(num: number, inc = 1) {
  return libRound(num, inc, 'floor');
}

/**
 * Rounds a number up to the nearest increment.
 * @param num The number to round.
 * @param inc The increment to round by.
 */
export function ceil(num: number, inc = 1) {
  return libRound(num, inc, 'ceil');
}

/**
 * Converts a number from degrees to radians.
 * @param deg The angle in degrees.
 */
export function radians(deg: number) {
  return (deg * Math.PI) / 180;
}

/**
 * Returns the sine of the given angle in degrees.
 * @param deg The angle in degrees.
 */
export function sin(deg: number) {
  return round(Math.sin(radians(deg)), trigRound);
}

/**
 * Returns the cosine of the given angle in degrees.
 * @param deg The angle in degrees.
 */
export function cos(deg: number) {
  return round(Math.cos(radians(deg)), trigRound);
}

/**
 * Returns the tangent of the given angle in degrees.
 * @param deg The angle in degrees.
 */
export function tan(deg: number) {
  if (deg % 180 === 90) return deg % 360 === 90 ? Infinity : -Infinity;
  return round(Math.tan(radians(deg)), trigRound);
}

/**
 * Averages an array of numbers.
 * @param nums An array of numbers.
 */
export function average(nums: number[]) {
  return nums.reduce((a, b) => a + b, 0) / nums.length;
}

/**
 * Adds an array of numbers.
 * @param nums An array of numbers.
 */
export function sum(nums: number[]) {
  return nums.reduce((a, b) => a + b, 0);
}

/**
 * Returns the greatest common divisor of the two numbers.
 * @param a The first number.
 * @param b The second number.
 */
export function gcd(a: number, b: number): number {
  return b === 0 ? a : gcd(b, a % b);
}

/**
 * Converts a decimal number to a fraction.
 * @param num The number to convert.
 */
export function fraction(num: number) {
  const i = Math.floor(num);
  let d = 10 ** decimals(num);
  let n = (num - i) * d;
  const divisor = gcd(n, d);
  n /= divisor;
  d /= divisor;
  return { i, n, d };
}

/**
 * Converts a number in inches to a string of feet and inches.
 * @param num The number to convert.
 */
export function lengthStr(num: number) {
  if (num <= 0) return '0"';
  const feet = floor(num / 12);
  const { i, n, d } = fraction(num % 12);
  let output = n ? `${n}/${d}` : '';
  output = output && i ? `-${output}` : output;
  output = i ? `${i}${output}` : output;
  output = output ? `${output}"` : '';
  output = feet ? `${feet}'${output}` : output;
  return output.trim();
}
