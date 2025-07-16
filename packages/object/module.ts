/**
 * A library of object related functions.
 * @module @moss/object
 */

// MARK: Imports
// --------------------------------------------------------------------------------------
import { isObject } from '@moss/assertion';
import { type Clarify } from '@moss/types';

type Merge<T1, T2> = Clarify<T1 & T2>;

type MergeArray<TArr extends readonly object[], T1 = {}> = TArr extends [infer T2 extends object, ...infer TRest extends object[]] ? MergeArray<TRest, Merge<T1, T2>> : T1;

// MARK: Library
// --------------------------------------------------------------------------------------

/**
 * Deeply merges one or more objects into a target object.
 * @param target The target object to merge into.
 * @param sources The source objects to merge.
 */
export function deepMerge<T extends Object, S extends object[]>(target: T, ...sources: S): MergeArray<[T, ...S]> {
  if (!sources.length) return target as MergeArray<[T, ...S]>;
  const source = sources.shift();
  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      const value = source[key];
      if (isObject(value)) {
        if (!target[key as keyof T]) Object.assign(target, { [key]: {} });
        // @ts-ignore
        deepMerge(target[key], value);
      } else {
        Object.assign(target, { [key]: value });
      }
    }
  }

  return deepMerge(target, ...sources);
}
