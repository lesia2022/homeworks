'use strict';
// Task #1
const age = +prompt('Enter the age of your dog, please:');
const height = +prompt('Enter your dog height from the neck up, please (in centimeters):');
const weight = +prompt('Enter your dog weight (in kilograms):');

if (age < 10 && height < 50 && weight < 40) {
    console.log("You are a good fit for a dog photo show! He is such a cutie!");
} else {
    console.log("Is someone too fat or too big?");
}


// Task #2
let numOrStr = prompt('input number or string');
console.log(numOrStr);

switch(true) {
    case (numOrStr === null):
        console.log('вы отменили');
        break;
    case (numOrStr.trim() === ''):
        console.log('Empty String');
        break;
    case (isNaN(+numOrStr)):
        console.log(' number is Ba_NaN');
        break;
    default:
        console.log('OK!');
}
