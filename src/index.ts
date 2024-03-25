/**
 * A library of math related functions.
 */

/**
 * Returns the amount of decimal places in a number.
 * @param num - The number to check.
 */
const decimalPlace = (num: number) => {
  let dec = 0;
  const decStr = `${num}`.split('.').at(1);
  if (decStr) dec = decStr.length;
  return dec;
};

/**
 * Rounds numbers using the exponential method to reduce rounding errors.
 * @param num - The number to round.
 * @param inc - The increment to round to.
 * @param method - The `Math` method to use.
 */
const expoRound = (num: number, inc: number, method: 'round' | 'floor' | 'ceil') => {
  // Get the quantity of decimal places from the increment.
  const dec = decimalPlace(inc);
  // Safety check for large decimal numbers.
  const numStr = parseFloat(`${num}`).toFixed(20);
  return Number(`${Math[method](Number(`${numStr}e${dec}`))}e-${dec}`);
};

/**
 * Round a number to the nearest increment.
 * @param num - The number to round.
 * @param inc - The increment to round to.
 */
export const round = (num: number, inc = 1) => {
  return expoRound(Math.round(num / inc) * inc, inc, 'round');
};

/**
 * Round a number down to the nearest increment.
 * @param num - The number to round.
 * @param inc - The increment to round to.
 */
export const floor = (num: number, inc = 1) => {
  return expoRound(Math.floor(num / inc) * inc, inc, 'floor');
};

/**
 * Round a number up to the nearest increment.
 * @param num - The number to round.
 * @param inc - The increment to round to.
 */
export const ceil = (num: number, inc = 1) => {
  return expoRound(Math.ceil(num / inc) * inc, inc, 'ceil');
};

/**
 * Converts degrees to radians.
 * @param deg - The angle in degrees.
 */
export const radians = (deg: number) => (deg * Math.PI) / 180;

/**
 * Returns the sine of a number.
 * @param deg - The angle in degrees.
 */
export const sin = (deg: number) => Math.sin(radians(deg));

/**
 * Returns the cosine of a number.
 * @param deg - The angle in degrees.
 */
export const cos = (deg: number) => Math.cos(radians(deg));

/**
 * Returns the tangent of a number.
 * @param deg - The angle in degrees.
 */
export const tan = (deg: number) => Math.tan(radians(deg));

/**
 * Get's the greatest common denominator between two numbers.
 * @param numA - The first number to compare.
 * @param numB - The second number to compare.
 */
export const gcd = (numA: number, numB: number): number => {
  if (numB < 0.0000001) return numA;
  return gcd(numB, Math.floor(numA % numB));
};

/**
 * Gets the average from an array of numbers.
 * @param nums - The array of numbers to average.
 */
export const average = (nums: number[]) => nums.reduce((numA, numB) => numA + numB) / nums.length;

/**
 * Add all the numbers in an array.
 * @param nums - The array of numbers to add together.
 */
export const sum = (nums: number[]) => nums.reduce((total, number) => total + number);

/**
 * Converts a decimal to a fraction object.
 * @param num - The number to convert.
 */
export const fraction = (num: number) => {
  /** The integer of the number. */
  const i = parseInt(`${num}`.split('.').at(0)!);
  /** The denominator */
  let d = 10 ** decimalPlace(num);
  /** The numerator */
  let n = (num - i) * d;
  const divisor = gcd(n, d);
  n = n / divisor;
  d = d / divisor;
  return { i, n, d };
};

/**
 * Converts a number to a length string.
 * @param num - The number to convert (inches).
 */
export const lengthStr = (num: number) => {
  if (num <= 0) return '0"';
  const feet = floor(num / 12);
  const inches = fraction(num % 12);
  let output = inches.n ? `${inches.n}/${inches.d}` : '';
  output = output && inches.i ? `-${output}` : output;
  output = inches.i ? `${inches.i}${output}` : output;
  output = output ? `${output}"` : '';
  output = feet ? `${feet}' ${output}` : output;
  return output.trim();
};
