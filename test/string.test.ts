import { capitalize, dashToCamelCase, camelToDashCase, textToCamelCase, textToTitleCase } from '../packages/string/module.ts';
import { assertEquals } from '@std/assert';

Deno.test('capitalize', () => {
  assertEquals(capitalize('hello'), 'Hello');
  assertEquals(capitalize('world'), 'World');
  assertEquals(capitalize(''), '');
  assertEquals(capitalize('a'), 'A');
  assertEquals(capitalize('1abc'), '1abc'); // Non-alphabetic first character
});

Deno.test('dashToCamelCase', () => {
  assertEquals(dashToCamelCase('hello-world'), 'helloWorld');
  assertEquals(dashToCamelCase('my-name-is'), 'myNameIs');
  assertEquals(dashToCamelCase(''), '');
  assertEquals(dashToCamelCase('a-b-c'), 'aBC');
  assertEquals(dashToCamelCase('1-abc'), '1Abc'); // Non-alphabetic first character
});

Deno.test('camelToDashCase', () => {
  assertEquals(camelToDashCase('helloWorld'), 'hello-world');
  assertEquals(camelToDashCase('myNameIs'), 'my-name-is');
  assertEquals(camelToDashCase(''), '');
  assertEquals(camelToDashCase('aBC'), 'a-b-c');
  assertEquals(camelToDashCase('1Abc'), '1-abc'); // Non-alphabetic first character
});

Deno.test('textToCamelCase', () => {
  assertEquals(textToCamelCase('hello world'), 'helloWorld');
  assertEquals(textToCamelCase('my name is'), 'myNameIs');
  assertEquals(textToCamelCase(''), '');
  assertEquals(textToCamelCase('a b c'), 'aBC');
  assertEquals(textToCamelCase('1 abc'), '1Abc'); // Non-alphabetic first character
});

Deno.test('textToTitleCase', () => {
  assertEquals(textToTitleCase('hello world'), 'Hello World');
  assertEquals(textToTitleCase('my name is'), 'My Name Is');
  assertEquals(textToTitleCase(''), '');
  assertEquals(textToTitleCase('a b c'), 'A B C');
  assertEquals(textToTitleCase('1 abc'), '1 Abc'); // Non-alphabetic first character
});
