'use strict';
const a = +prompt ('Enter the first number, please');
const b = +prompt('Enter the second number, please');
const c = prompt('Enter the number to check, please');

function firstExample(a,b) {
return a === b;
}
console.log(firstExample(a,b));

function secondExample(a,b) {
   return (a+b) > 10;
}
console.log(secondExample(a,b));

function thirdExample(c) {
   return c < 0;
}
console.log(thirdExample(c));
