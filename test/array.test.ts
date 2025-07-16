import { range } from '../packages/array/module.ts';
import { assertEquals } from '@std/assert';

Deno.test('range', () => {
  assertEquals(range(0, 10), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  assertEquals(range(0, 10, 2), [0, 2, 4, 6, 8, 10]);
  assertEquals(range(0, 10, 3), [0, 3, 6, 9]);
});
