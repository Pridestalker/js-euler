/**
 * @param {number} n The sequence number in the fibonacci sequence
 * @returns {number}
 */
const fib = n => n <= 1 ? 1 : fib(n - 1) + fib(n - 2);

/**
 * @param {number} n The n to fibonacci
 * @param {object} memo The memo to hold old data.
 */
const fibMemo = (n, memo) => {
    if (n <= 1) return 1;
  
    memo = memo || {};
    if (memo[n]) return memo[n];
  
    return memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
  };

  
/**
 * Check if number is prime
 * @param {number} n The number to check if it is a prime
 * @returns {boolean}
 */
const isPrime = n => {
    const bound =  Math.floor(Math.sqrt(n));

    for (let i = 2; i <= bound; i++) if (n % i === 0) return false;

    return n >= 2;
}

/**
 * @param {number} n first number
 * @param {number} j second number
 * @returns {number}
 */
const product = (n, j) => n*j;

const pow = (n, exp) => n**exp;

const sumPow = (end, exp = 2, start = 1) => Array(end + 1 - start).fill(0).map((x, i) => (i + start) ** exp).reduce((a,b) => a + b, 0);

const squarePow = (end, exp = 2, start = 1) => pow(Array(end + 1 - start).fill(0).map((x, i) => (i + start)).reduce((a, b) => a + b, 0), exp);

const arithmetics = () => {
  return {
    product,
    pow,
    sumPow,
    squarePow
  }
}


module.exports = { 
  fib, fibMemo, 
  isPrime, 
  arithmetics
}