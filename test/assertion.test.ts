import { isArray, isBoolean, isFiniteNumber, isInteger, isNonEmptyString, isNumber, isObject, isString } from '../packages/assertion/module.ts';
import { assertEquals } from '@std/assert';

Deno.test('isArray', () => {
  assertEquals(isArray([]), true);
  assertEquals(isArray([1]), true);
  assertEquals(isArray([1, 2, 3]), true);
  assertEquals(isArray({}), false);
  assertEquals(isArray({ length: 0 }), false);
  assertEquals(isArray('1'), false);
});

Deno.test('isString', () => {
  assertEquals(isString('1'), true);
  assertEquals(isString(1), false);
});

Deno.test('isNonEmptyString', () => {
  assertEquals(isNonEmptyString('1'), true);
  assertEquals(isNonEmptyString(''), false);
  assertEquals(isNonEmptyString(1), false);
});

Deno.test('isObject', () => {
  assertEquals(isObject({}), true);
  assertEquals(isObject([]), false);
  assertEquals(isObject('1'), false);
  assertEquals(isObject(1), false);
});

Deno.test('isBoolean', () => {
  assertEquals(isBoolean(true), true);
  assertEquals(isBoolean(1), false);
});

Deno.test('isNumber', () => {
  assertEquals(isNumber(1), true);
  assertEquals(isNumber(1.1), true);
  assertEquals(isNumber(Infinity), true);
  assertEquals(isNumber(-Infinity), true);
  assertEquals(isNumber(NaN), false);
  assertEquals(isNumber(true), false);
  assertEquals(isNumber('1'), false);
});

Deno.test('isFiniteNumber', () => {
  assertEquals(isFiniteNumber(1), true);
  assertEquals(isFiniteNumber(1.1), true);
  assertEquals(isFiniteNumber(Infinity), false);
  assertEquals(isFiniteNumber(-Infinity), false);
  assertEquals(isFiniteNumber(NaN), false);
  assertEquals(isFiniteNumber(true), false);
  assertEquals(isFiniteNumber('1'), false);
});

Deno.test('isInteger', () => {
  assertEquals(isInteger(1), true);
  assertEquals(isInteger(1.1), false);
  assertEquals(isInteger(Infinity), false);
  assertEquals(isInteger(-Infinity), false);
  assertEquals(isInteger(NaN), false);
  assertEquals(isInteger(true), false);
  assertEquals(isInteger('1'), false);
});
