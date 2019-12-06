import test from 'ava';
import { primeFactor } from '../solutions/003';

test('Find largest prime factor', t => {
    t.is(primeFactor(13195), 29, 'Largest prime factor of 13195 should return 29.');
    t.is(primeFactor(600851475143), 6857, 'Largest prime factor of 600851475143 should return 6857.');
})