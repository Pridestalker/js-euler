import test from 'ava';
import {fibSumMemoAsync, fibSumMemo, fibSumBelowEven} from '../solutions/002/';

test('Fibonacci memoization', t => {
  t.is(fibSumMemo(10), 143, 'Sum fibonacci till 10');
  t.is(fibSumMemo(50), 32951280098, 'Sum of all to 50');
});

test('Fibonacci async memoization', async t => {
  t.is(await fibSumMemoAsync(10), 143, 'Sum fibonacci till 10');
  t.is(await fibSumMemoAsync(50), 32951280098, 'Sum of all to 50');
});

test('Fibonacci sum below', t => {
  t.is(fibSumBelowEven(4_000_000), 4_613_732);
});

