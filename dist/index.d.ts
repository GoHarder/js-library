/**
 * A library to control the calling of functions.
 * @module
 */
/**
 * Group sequential function calls into one delayed call.
 * - 1111111110 Input
 * - 0000000001 Output
 * @param callback The function to debounce.
 * @param delay The time, in milliseconds the function should wait.
 */
export declare const debounce: <T extends any[]>(fx: (...args: T) => any, delay: number) => (...args: T) => void;
/**
 * Group sequential function calls into one immediate call.
 * - 1111111111 Input
 * - 1000000000 Output
 * @param callback The function to debounce.
 * @param delay The time, in milliseconds the function should wait.
 */
export declare const debounceLeading: <T extends any[]>(fx: (...args: T) => any, delay: number) => (...args: T) => void;
/**
 * Group sequential function calls into intervaled calls.
 * - 1111111111 Input
 * - 0001000100 Output
 * @param fx The function to throttle.
 * @param delay The time, in milliseconds the function should wait.
 */
export declare const throttle: <T extends any[]>(fx: (...args: T) => any, delay: number) => (...args: T) => void;
/**
 * Pauses code for a specified length of time.
 * @param delay The length of the delay in milliseconds.
 */
export declare const sleep: (delay: number) => Promise<unknown>;
