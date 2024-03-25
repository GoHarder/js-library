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
export const debounce = <T extends any[]>(fx: (...args: T) => any, delay: number) => {
  let timeout: NodeJS.Timeout | number;

  return (...args: T) => {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      fx(...args);
    }, delay);
  };
};

/**
 * Group sequential function calls into one immediate call.
 * - 1111111111 Input
 * - 1000000000 Output
 * @param callback The function to debounce.
 * @param delay The time, in milliseconds the function should wait.
 */
export const debounceLeading = <T extends any[]>(fx: (...args: T) => any, delay: number) => {
  let timeout: NodeJS.Timeout | number | undefined;

  return (...args: T) => {
    if (!timeout) fx(...args);

    clearTimeout(timeout);

    timeout = setTimeout(() => {
      timeout = undefined;
    }, delay);
  };
};

/**
 * Group sequential function calls into intervaled calls.
 * - 1111111111 Input
 * - 0001000100 Output
 * @param fx The function to throttle.
 * @param delay The time, in milliseconds the function should wait.
 */
export const throttle = <T extends any[]>(fx: (...args: T) => any, delay: number) => {
  let wait = false;
  let queue: T | null = null;

  const checkQueue = () => {
    if (queue === null) {
      wait = false;
    } else {
      fx(...queue);
      queue = null;
      setTimeout(checkQueue, delay);
    }
  };

  return (...args: T) => {
    if (wait) {
      queue = args;
      return;
    }
    fx(...args);
    wait = true;
    setTimeout(checkQueue, delay);
  };
};

/**
 * Pauses code for a specified length of time.
 * @param delay The length of the delay in milliseconds.
 */
export const sleep = (delay: number) => new Promise((resolve) => setTimeout(resolve, delay));
