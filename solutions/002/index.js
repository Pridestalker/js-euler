const number = require('../../helpers/numbers.module');

/**
 * Returns the sequence answer of numberonacci
 * @param {number} limit End of sequence
 * @returns {number}
 */
const fibSum = (limit = 10) => {
  let sum = 0;
  for (let i = 0; i < limit; i++) {
    sum += number.fib(i);
  }

  return sum;
};

/**
 * 
 * @param {number} limit 
 * @async
 * @returns {Promise<number>}
 */
const fibSumAsync = (limit = 10) => {
  return new Promise(resolve => {
    let sum = 0;
    for (let i = 0; i < limit; i++) {
      sum += number.fib(i);
    }
    resolve(sum);
  });
};

/**
 * Memoized numberonacci sequence
 * 
 * @param {number} limit The limit for the sequence
 * @returns {number}
 */
const fibSumMemo = (limit = 10) => {
  let sum = 0;
  for (let i = 0; i < limit; i++) {
    sum += number.fibMemo(i, {});
  }

  return sum;
};

const fibSumMemoAsync = (limit = 10) => {
  return new Promise(resolve => {
    let sum = 0;
    for (let i = 0; i < limit; i++) {
      sum += number.fibMemo(i);
    }
    resolve(sum);
  });
};

const fibSumBelowEven = (limit = 10) => {
  let sum = 0;

  for (let i = 0; ; i++) {
    let res = number.fibMemo(i, {});
    if (res > limit) break;
    
    if (res % 2 === 0) {
      sum += res;
    }
  }

  return sum;
};

module.exports = { fibSumMemoAsync, fibSum, fibSumAsync, fibSumMemo, fibSumBelowEven };
