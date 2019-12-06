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

module.exports = { fib, fibMemo, isPrime }