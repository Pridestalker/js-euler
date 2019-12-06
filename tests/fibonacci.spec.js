import test from 'ava';
import {fibSumMemoAsync, fibSumMemo, fibSumBelowEven} from '../solutions/002/fibonacci';

// test('Fibonacci sequence', t => {
//   t.is(fibSum(10), 143, 'Sum fib till 10');
// });
//
// test('Fibonacci sequence async', async t => {
//   t.is(await fibSumAsync(10), 143, 'Sum fib till 10');
//   t.is(await fibSumAsync(50), 143, 'Sum fib50');
// });

test('Fibonacci memoization', t => {
  t.is(fibSumMemo(10), 143, 'Sum fibonacci till 10');
  t.is(fibSumMemo(50), 32951280098, 'Sum of all to 50');
});

test('Fibonacci async memoization', async t => {
  t.is(await fibSumMemoAsync(10), 143, 'Sum fibonacci till 10');
  t.is(await fibSumMemoAsync(50), 32951280098, 'Sum of all to 50');
});

test('Fibonacci sum below', t => {
  t.is(fibSumBelowEven(4000000), 4613732);
});

