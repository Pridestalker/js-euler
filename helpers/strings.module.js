/**
 * Checks if passed string is a palindrome
 * @param {string} str 
 * @returns {boolean}
 */
const palindrome = str => {
    const s = str.toLowerCase().replace(/[\W_]/g, '');
    return s === [...s].reverse().join('');
};

/**
 * @param {number} n 
 * @return {string}
 */
const numberConverter = n => '' + n;

const converter = {
    number: numberConverter,
}

module.exports = {
    palindrome,
    converter
}