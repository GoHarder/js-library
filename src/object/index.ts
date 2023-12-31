/**
 * A library of object related functions.
 * @packageDocumentation
 */

import { isObject } from '../validate/index';

/**
 * A safe way to call `structuredClone()` method.
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/structuredClone)
 * @param value - The object to clone.
 * @public
 */
export const clone = <T = any>(value: T, options?: StructuredSerializeOptions) => {
  try {
    return structuredClone(value, options);
  } catch {
    return JSON.parse(JSON.stringify(value));
  }
};

/**
 * Deeply merges two objects.
 * @param target The object to merge in to.
 * @param sources The objects to merge into the target.
 * @public
 */
export const deepMerge = <T1 extends object, T2>(target: T1, ...sources: T2[]): T1 => {
  if (!sources.length) return target;
  const source = sources.shift();
  const _target = clone(target);

  if ((isObject(_target), isObject(source))) {
    for (const key in source) {
      const value = source[key];

      if (isObject(value)) {
        if (key in _target) {
          _target[key as keyof T1 & typeof value] = deepMerge(_target[key as keyof T1 & typeof value], value);
        } else {
          Object.assign(_target, { [key]: value });
        }
      } else {
        Object.assign(_target, { [key]: value });
      }
    }
  }

  return deepMerge(_target, ...sources);
};
