'use strict';
// Task #1
let x = 10, y = 7;

let result = x > y ? 'x more, than y' : 'x no more, than y';
console.log(result); // Outputs "x more, than y"

// Task #2

/* const num = prompt('Enter the number, please.');
if (num % 2 === 0) {
    alert('Number ' + num + ' even');
} else {
    alert('Number ' + num + ' odd');
} */


// Task #3
const num = prompt('Enter an integer, please');
const length = Math.abs(num).toString().length;
let sign = '';

if (num > 0) {
    sign = 'positive';
} else if (num < 0) {
    sign = 'negative';
} else {
    sign = 'zero';
}

if (length === 1) {
    alert(`Number ${num} single-digit ${sign}`);
} else if (length === 2) {
    alert(`Number ${num} two-digit ${sign}`);
} else {
    alert(`Number ${num} three digits or more ${sign}`);
}

// Task #4

const num1 = prompt('Enter the first number');
const num2 = prompt('Enter the second number');
const num3 = prompt('Enter the third number');

let max = num1;
if (num2 > max) {
    max = num2;
}
if (num3 > max) {
    max = num3;
}

alert(`The largest number of: ${max}`);


// Task #5
const a = +prompt('Enter the length of the side A');
const b = +prompt('Enter the length of the side B');
const c = +prompt('Enter the length of the side C');

if (a + b > c && a + c > b && b + c > a) {
    alert('A triangle with such sides exists');
} else {
    alert('A triangle with such sides does not exist');
}







