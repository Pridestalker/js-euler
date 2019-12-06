const number = require('../../helpers/numbers.module');

const smallestDiv = (limit, upper_limit = Number.MAX_SAFE_INTEGER) => {
    for (let i = limit; i < upper_limit; i += limit) {
        if (number.isPrime(i)) continue;

        for (let j = 1; j <= limit; j++) {
            if (i % j !== 0) continue;
            return i;
        }
    }
}

module.exports = {
    smallestDiv
};

// TODO: finsh