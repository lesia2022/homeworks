'use strict';
function palindromeCheck(number, steps = 0) {
    if (number.toString() === number.toString().split('').reverse().join('')) {
        return { result: number, steps: steps };
    }
    else {
        const newNumber = number + Number(number.toString().split('').reverse().join(''));
        steps++;
        return palindromeCheck(newNumber, steps);
    }
}
console.log(palindromeCheck(312));
console.log(palindromeCheck(1234));
console.log(palindromeCheck(96));
console.log(palindromeCheck(75));