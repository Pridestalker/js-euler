import test from 'ava';
import { primeFactor } from '../solutions/003';
import { bruteForceFindPrime } from '../solutions/007'

test('Find largest prime factor', t => {
    t.is(primeFactor(13195), 29, 'Largest prime factor of 13195 should return 29.');
    t.is(primeFactor(600851475143), 6857, 'Largest prime factor of 600851475143 should return 6857.');
})

test('Find nth prime number', t => {
    t.is(bruteForceFindPrime(6), 13);
    t.is(bruteForceFindPrime(1e4 + 1), 104743);
})