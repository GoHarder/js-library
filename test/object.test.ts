import { deepMerge } from '../packages/object/module.ts';
import { assertEquals } from '@std/assert';

Deno.test('deepMerge', () => {
  const target = { a: 1, b: { c: 2 } };
  const source1 = { b: { d: 3 }, e: 4 };
  const source2 = { f: 5 };

  const result = deepMerge(target, source1, source2);

  assertEquals(result, {
    a: 1,
    b: {
      c: 2,
      d: 3,
    },
    e: 4,
    f: 5,
  });

  // Test with empty sources
  const emptyResult = deepMerge(target);
  assertEquals(emptyResult, target);
});
