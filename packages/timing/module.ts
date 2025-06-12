// A library to control the calling of functions.

// MARK: Library
// --------------------------------------------------------------------------------------

/**
 * Groups multiple calls to a function into a delayed call.
 * @param fn The function to debounce.
 * @param delay The delay in milliseconds.
 */
export function debounce<T extends any[]>(fn: (...args: T) => void, delay: number) {
  let timeout: NodeJS.Timeout | number;
  return (...args: T) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

/**
 * Groups multiple calls to a function into an immediate call.
 * @param fn The function to debounce.
 * @param delay The delay in milliseconds.
 */
export function debounceLeading<T extends any[]>(fn: (...args: T) => void, delay: number) {
  let timeout: NodeJS.Timeout | number | undefined;
  return (...args: T) => {
    if (!timeout) fn(...args);
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      timeout = undefined;
    }, delay);
  };
}

/**
 * Groups multiple calls to a function into intervaled calls.
 * @param fn The function to throttle.
 * @param delay The delay in milliseconds.
 */
export function throttle<T extends any[]>(fn: (...args: T) => void, delay: number) {
  let wait = false;
  let queue: T | null = null;

  const checkQueue = () => {
    if (queue === null) {
      wait = false;
    } else {
      fn(...queue);
      queue = null;
      setTimeout(checkQueue, delay);
    }
  };
  return (...args: T) => {
    if (wait) {
      queue = args;
      return;
    }
    fn(...args);
    wait = true;
    setTimeout(checkQueue, delay);
  };
}

/**
 * Sleeps for the given number of milliseconds.
 * @param ms The number of milliseconds to sleep.
 */
export function sleep(ms: number) {
  return new Promise((res) => setTimeout(res, ms));
}
