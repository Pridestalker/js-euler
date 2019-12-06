import test from 'ava';
import { palindromic } from '../solutions/004';
import { sumSquareDifference } from '../solutions/006';
const m = require('../solutions/001/multiples');

test('Multiples of 3 and 5', test => {
  test.is(m.multiples(10), 23, 'Multiples under 10 equals 23');
  test.is(m.multiples(1000), 233168, 'Multiples under 1000')
});

test('Async multiples of 3 and 5', async t => {
  t.is(await m.multiplesAsync(10), 23, 'Multiples under 10 equals 23');
  t.is(await m.multiplesAsync(1000), 233168, 'Multiples under 1000')
});

test('Largest palindrome from multiples', t => {
  t.is(palindromic(2), 9009, '2 digit palindrome is 9009');
  t.is(palindromic(3), 906609, '3 digit palindrome is 906609.')
})

test('Difference between the sum of the squares', t => {
  t.is(sumSquareDifference(10), 2640, 'The difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.')
  t.is(sumSquareDifference(100), 25164150, 'The difference between the sum of the squares of the first hunderd natural numbers and the square of the sum is 25164150.')
})