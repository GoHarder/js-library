import {
  round,
  floor,
  ceil,
  radians,
  sin,
  cos,
  tan,
  average,
  sum,
  gcd,
  fraction,
  lengthStr,
} from '../packages/math/module.ts';
import { assertEquals } from '@std/assert';

Deno.test('round', () => {
  assertEquals(round(1.1), 1);
  assertEquals(round(1.25, 0.5), 1.5);
});

Deno.test('floor', () => {
  assertEquals(floor(1.1), 1);
  assertEquals(floor(1.25, 0.5), 1);
});

Deno.test('ceil', () => {
  assertEquals(ceil(1.1), 2);
  assertEquals(ceil(1.25, 0.5), 1.5);
});

Deno.test('radians', () => {
  assertEquals(radians(0), 0);
  assertEquals(radians(90), Math.PI / 2);
  assertEquals(radians(180), Math.PI);
  assertEquals(radians(270), Math.PI * 1.5);
});

Deno.test('sin', () => {
  assertEquals(sin(0), 0);
  assertEquals(sin(90), 1);
  assertEquals(sin(180), 0);
  assertEquals(sin(270), -1);
});

Deno.test('cos', () => {
  assertEquals(cos(0), 1);
  assertEquals(cos(90), 0);
  assertEquals(cos(180), -1);
  assertEquals(cos(270), 0);
  assertEquals(cos(28 / 2), 0.970295726275997);
});

Deno.test('tan', () => {
  assertEquals(tan(0), 0);
  assertEquals(tan(90), Infinity);
  assertEquals(tan(180), 0);
  assertEquals(tan(270), -Infinity);
});

Deno.test('average', () => {
  assertEquals(average([1, 2, 3]), 2);
  assertEquals(average([1, 2, 3, 4]), 2.5);
  assertEquals(average([]), NaN); // Edge case: empty array
});

Deno.test('sum', () => {
  assertEquals(sum([1, 2, 3]), 6);
  assertEquals(sum([1, 2, 3, 4]), 10);
  assertEquals(sum([]), 0); // Edge case: empty array
});

Deno.test('gcd', () => {
  assertEquals(gcd(12, 15), 3);
  assertEquals(gcd(100, 25), 25);
  assertEquals(gcd(7, 1), 1);
  assertEquals(gcd(0, 5), 5); // Edge case: zero
});

Deno.test('fraction', () => {
  assertEquals(fraction(0.5), { i: 0, n: 1, d: 2 });
  assertEquals(fraction(0.25), { i: 0, n: 1, d: 4 });
  assertEquals(fraction(0.3), { i: 0, n: 3, d: 10 });
  assertEquals(fraction(1.5), { i: 1, n: 1, d: 2 });
  assertEquals(fraction(2.75), { i: 2, n: 3, d: 4 });
});

Deno.test('lengthStr', () => {
  assertEquals(lengthStr(0), '0"');
  assertEquals(lengthStr(12), "1'");
  assertEquals(lengthStr(24), "2'");
  assertEquals(lengthStr(36), "3'");
  assertEquals(lengthStr(12.5), '1\'1/2"');
  assertEquals(lengthStr(13.75), '1\'1-3/4"');
});
