import { test } from 'tape';
import { fibonacciIndex } from './fibonacci';

test('count whit whole number', t => {
  const actual = fibonacciIndex(5);
  const expected = 5;

  t.equal(actual, expected);
  t.end();
});

test('count whit other number', t => {
  const actual = fibonacciIndex(-10);
  const expected = 0;

  t.equal(actual, expected);
  t.end();
});

test('count whit other number', t => {
  const actual = fibonacciIndex(14);
  const expected = 377;

  t.equal(actual, expected);
  t.end();
});