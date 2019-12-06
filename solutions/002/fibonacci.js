const fib = (n) => n <= 1 ? 1 : fib(n - 1) + fib(n - 2);

const fibMemo = (n, memo) => {
  if (n <= 1) return 1;

  memo = memo || {};
  if (memo[n]) return memo[n];

  return memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
};

const fibSum = (limit = 10) => {
  let sum = 0;
  for (let i = 0; i < limit; i++) {
    sum += fib(i);
  }

  return sum;
};

const fibSumAsync = (limit = 10) => {
  return new Promise(resolve => {
    let sum = 0;
    for (let i = 0; i < limit; i++) {
      sum += fib(i);
    }
    resolve(sum);
  });
};

const fibSumMemo = (limit = 10) => {
  let sum = 0;
  for (let i = 0; i < limit; i++) {
    sum += fibMemo(i, {});
  }

  return sum;
};

const fibSumMemoAsync = (limit = 10) => {
  return new Promise(resolve => {
    let sum = 0;
    for (let i = 0; i < limit; i++) {
      sum += fibMemo(i);
    }
    resolve(sum);
  });
};

const fibSumBelowEven = (limit = 10) => {
  let sum = 0;

  for (let i = 0; i < limit; i++) {
    let res = fibMemo(i, {});

    if (res % 2 === 0) {
      sum += res;
    }
  }

  return sum;
};

module.exports = { fibSumMemoAsync, fibSum, fibSumAsync, fibSumMemo, fibSumBelowEven };
