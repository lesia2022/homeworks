`use strict`;
//Task #1

const ex1 = Boolean(Number(`10`)) + 1;
console.log(Boolean(Number(`10`)) + 1); // Result: 2

const ex2 = `sub` + Number(false);
console.log(`sub` + Number(false)); // Result: sub0

const ex3 = 16  * `      91    `;
console.log(16 * `      91    `); // Result: 1456

const ex4 = true-70;
console.log(true-70); // Result: -69

const ex5 = Number(1 + String(1)) + 1;
console.log(Number(1 + String(1)) + 1); // Result: 12


// Task #2

const hours = prompt(`Enter the number of hours, please:`);
const seconds = hours * 60 * 60;
alert(`In ${hours} hours ${seconds} seconds.`);


// Task #3

let num = 1;
num += 12;
num -= 14;
num *= 5;
num /= 7;
num++;
num--;
alert(num);