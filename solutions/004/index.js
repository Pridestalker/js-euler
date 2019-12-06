const string = require('../../helpers/strings.module');
const number = require('../../helpers/numbers.module');

const palindromic = (digits) => {
    let { min, max } = { 
        max: parseInt('9'.repeat(digits)),
        min: parseInt('9'.repeat(digits - 1))
    }

    let highest = 0

    // Work from top top down do get skip all numbers that are too low.
    for (let i = max; i > min; i--) {
        for (let j = max; j > min; j--) {
            const product = number.arithmetics().product(i, j);
            if(string.palindrome(string.converter.number(product))) {
                if (product >= highest) {
                    highest = product;
                }
            }
        }
    }
    
    return highest;
}

module.exports = {
    palindromic
}