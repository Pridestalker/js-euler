const number = require('../../helpers/numbers.module');

/**
 * @param {number} limit The limit to count and diff
 */
const sumSquareDifference = (limit) => number.arithmetics().squarePow(limit) - number.arithmetics().sumPow(limit)

module.exports = { 
    sumSquareDifference
}