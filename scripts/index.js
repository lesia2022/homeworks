'use strict';
const padString = (str, length, symbol, right = true) => {
    if (typeof str !== 'string') {
        return 'Error: The first argument must be a string.';
    }
    if (typeof length !== 'number' || isNaN(length) || !isFinite(length)) {
        return 'Error: The second argument must be a number.';
    }
    if (typeof symbol !== 'string' || symbol.length !== 1) {
        return 'Error: The third argument must be a string with a length of 1 character.';
    }
    if (typeof right !== 'boolean') {
        return 'Error: The fourth argument must be a boolean.';
    }

    if (str.length === length) {
        return str;
    }
    if (str.length > length) {
        return str.substring(0, length);
    }

    const symbols = symbol.repeat(length - str.length);
    return right ? str + symbols : symbols + str;
};

console.log(padString('hello', 8, '*'));
console.log(padString('hello', 6, '*', false));
console.log(padString('hello', 2, '#', false));
console.log(padString(123, 8, '*'));
console.log(padString('hello', 'world', '*'));
console.log(padString('hello', 8, '**'));
console.log(padString('hello', 8, '*&', true));

