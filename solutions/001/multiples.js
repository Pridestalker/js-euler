const multiples = (limit = 10) => {
  let sum = 0;

  for (let i = 0; i < limit; i++) {
    if (i % 3 === 0) {
      sum += i;
    } else if (i % 5 === 0) {
      sum += i;
    }
  }

  return sum;
};

const multiplesAsync = async (limit = 10) => {
  return new Promise (resolve => {
    let sum = 0;

    for (let i = 0; i < limit; i++) {
      if (i % 3 === 0) {
        sum += i;
      } else if (i % 5 === 0) {
        sum += i;
      }
    }

    resolve(sum);
  })
};

module.exports = { multiples, multiplesAsync };
