/**
 * A library of math related functions.
 */
/**
 * Round a number to the nearest increment.
 * @param num - The number to round.
 * @param inc - The increment to round to.
 */
export declare const round: (num: number, inc?: number) => number;
/**
 * Round a number down to the nearest increment.
 * @param num - The number to round.
 * @param inc - The increment to round to.
 */
export declare const floor: (num: number, inc?: number) => number;
/**
 * Round a number up to the nearest increment.
 * @param num - The number to round.
 * @param inc - The increment to round to.
 */
export declare const ceil: (num: number, inc?: number) => number;
/**
 * Converts degrees to radians.
 * @param deg - The angle in degrees.
 */
export declare const radians: (deg: number) => number;
/**
 * Returns the sine of a number.
 * @param deg - The angle in degrees.
 */
export declare const sin: (deg: number) => number;
/**
 * Returns the cosine of a number.
 * @param deg - The angle in degrees.
 */
export declare const cos: (deg: number) => number;
/**
 * Returns the tangent of a number.
 * @param deg - The angle in degrees.
 */
export declare const tan: (deg: number) => number;
/**
 * Get's the greatest common denominator between two numbers.
 * @param numA - The first number to compare.
 * @param numB - The second number to compare.
 */
export declare const gcd: (numA: number, numB: number) => number;
/**
 * Gets the average from an array of numbers.
 * @param nums - The array of numbers to average.
 */
export declare const average: (nums: number[]) => number;
/**
 * Add all the numbers in an array.
 * @param nums - The array of numbers to add together.
 */
export declare const sum: (nums: number[]) => number;
/**
 * Converts a decimal to a fraction object.
 * @param num - The number to convert.
 */
export declare const fraction: (num: number) => {
    i: number;
    n: number;
    d: number;
};
/**
 * Converts a number to a length string.
 * @param num - The number to convert (inches).
 */
export declare const lengthStr: (num: number) => string;
