/**
 * A library of object related functions.
 * @module @moss/object
 */

// MARK: Imports
// --------------------------------------------------------------------------------------
import { isObject } from '@moss/assertion';

// MARK: Library
// --------------------------------------------------------------------------------------
/**
 * Deeply merges one or more objects into a target object.
 * @param target The target object to merge into.
 * @param sources The source objects to merge.
 */
export function deepMerge<T extends Record<string | number | symbol, any>>(target: T, ...sources: any[]): T {
  if (!sources.length) return target;
  const source = sources.shift();
  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      const value = source[key];
      if (isObject(value)) {
        if (!target[key]) Object.assign(target, { [key]: {} });
        deepMerge(target[key], value);
      } else {
        Object.assign(target, { [key]: value });
      }
    }
  }

  return deepMerge(target, ...sources);
}
