const number = require('../../helpers/numbers.module');

const seriedProduct = (n, limit = 4) => {
    let sum = 0;
    const matrix = number.makeMatrix(n);

    for (let i = 0; i < matrix.length - limit; i++) {
        let sum_i = 0;
        for (let j = 0; j < limit; j+=2 ) {
            sum_i = number.arithmetics().product(matrix[i + j], matrix[i + j + 1]);
        }
        if (sum_i >= sum) {
            sum = sum_i;
        }
    }

    return sum;
}

module.exports = {
    seriedProduct
}