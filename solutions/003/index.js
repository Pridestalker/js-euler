const number = require('../../helpers/numbers.module');


const primeFactor = n => {
    let bound =  Math.floor(Math.sqrt(n));

    bound = (bound & 1) === 0 ? bound - 1 : bound;

    while (!(n % bound === 0 && number.isPrime(bound))) {
        bound -= 2;
    }

    return bound;
}

module.exports = { primeFactor };