const number = require('../../helpers/numbers.module');

const seriedProduct = (n, limit = 4) => {
    let sum = 0;
    const matrix = number.makeMatrix(n);

    for (let i = 0; i < matrix.length - limit; i++) {
        const sum_i = number.arithmetics().product(...matrix.slice(i, i + limit));
        if (sum_i >= sum) {
            sum = sum_i;
        }
    }

    return sum;
}

module.exports = {
    seriedProduct
}