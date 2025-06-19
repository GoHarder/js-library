/**
 * A library of utility types.
 * @module @moss/types
 */

// MARK: Helpers
// --------------------------------------------------------------------------------------
/**
 * Helper type for defining a type that can only have the keys of the first type.
 * Used in OneOf type.
 */
type OnlyFirst<F, S> = Clarify<F & { [Key in keyof Omit<S, keyof F>]?: never }>;

// MARK: Library
// --------------------------------------------------------------------------------------
/** Transforms ambiguous or generic types into more specific, well-defined type. */
export type Clarify<T> = {
  [K in keyof T]: T[K];
} & {};

/** A type that can be undefined. */
export type MaybeDef<T> = T | undefined;

/** Merges two objects together. */
export type Merge<T1, T2> = Clarify<Omit<T1, keyof T2> & T2>;

/** Merges multiple objects together. */
export type MergeArray<TArr extends readonly object[], T1 = {}> = TArr extends [infer T2 extends object, ...infer TRest extends object[]]
  ? MergeArray<TRest, Merge<T1, T2>>
  : T1;

/** The primitive types that can be represented in JSON. */
export type JsonPrimitive = string | number | boolean | null;

/** An object of key-value pairs where the values can be any valid JSON type. */
export type JsonObject = { [x: string]: Json };

/** An array of any valid JSON type. */
export type JsonArray = Json[];

/** A type that represents any valid JSON type. */
export type Json = JsonPrimitive | JsonObject | JsonArray;

/** A type that is one of the types in the given array. */
export type OneOf<TArr extends any[], T1 = never, Props = MergeArray<TArr>> = TArr extends [infer Head, ...infer Rem] ? OneOf<Rem, T1 | OnlyFirst<Head, Props>, Props> : T1;
