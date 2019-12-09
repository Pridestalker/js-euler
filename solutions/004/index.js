const string = require('../../helpers/strings.module');
const number = require('../../helpers/numbers.module');

/**
 * @param {number} digits The maximum amount of digits
 */
const palindromic = (digits) => {
    if (digits === 1) return;

    let { min, max } = { 
        max: parseInt('9'.repeat(digits)),
        min: parseInt('9'.repeat(digits - 1))
    }

    let highest = 0

    for (let i = max; i > min; i--) {
        for (let j = max; j > min; j--) {
            const product = number.arithmetics().product(i, j);
            if(string.palindrome(string.converter.number(product)) && product >= highest) {
                highest = product;
            }
        }
    }
    
    return highest;
}

module.exports = {
    palindromic
}