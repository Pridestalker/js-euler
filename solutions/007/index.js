const number = require('../../helpers/numbers.module');

const bruteForceFindPrime = (limit) => {
    let prime = 5;
    
    const primes = [2, 3];

    for (let i = 2; i < limit; i++) {
        while(!number.isPrime(prime)) {
            prime += 2;
        }   
        primes.push(prime);
        prime += 2;
    }

    return primes.pop();
}

module.exports = {
    bruteForceFindPrime
}