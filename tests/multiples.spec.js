import test from 'ava';
const m = require('../solutions/001/multiples');

test('Multiples of 3 and 5', test => {
  test.is(m.multiples(10), 23, 'Multiples under 10 equals 23');
  test.is(m.multiples(1000), 233168, 'Multiples under 1000')
});

test('Async multiples of 3 and 5', async t => {
  t.is(await m.multiplesAsync(10), 23, 'Multiples under 10 equals 23');
  t.is(await m.multiplesAsync(1000), 233168, 'Multiples under 1000')
});
