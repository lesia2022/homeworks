'use strict';


function findSmallestDivisor(number) {
    if (number < 1 || !Number.isInteger(number)) {
        return NaN;
    }
    for (let divisor = 2; divisor <= number; divisor++) {
        if (number % divisor === 0) {
            return divisor;
        }
    }
}
const userInput = prompt('Enter the number:');
const number = parseInt(userInput);
const smallestDivisor = findSmallestDivisor(number);
console.log(`Нis the smallest divisor of a number ${number} equal ${smallestDivisor}`);






//Through the while

// const num = prompt('Enter the number:');
// const number = Number(num);
//
// if (number < 1 || isNaN(number)) {
//     console.log("NaN");
// } else {
//     let divisor = 2;
//     while (number % divisor !== 0) {
//         divisor++;
//     }
//     console.log(divisor);
// }


