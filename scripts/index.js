'use strict';

//1
let output = "";
for (let i = 10; i <= 20; i++) {
    output += i + ", ";
}
console.log(output.slice(0, -2));

//2
for (let i = 10; i <= 20; i++) {
    console.log(i * i);
}

//3
for (let i = 1; i <= 10; i++) {
    console.log(`7 x ${i} = ${7 * i}`);
}

//4
let sum1 = 0;
for (let i = 1; i <= 15; i++) {
    sum1 += i;
}
console.log(sum1);

//5
let product = 1;
for (let i = 15; i <= 35; i++) {
    product *= i;
}
console.log(product);

//6
let sum2 = 0;
for (let i = 1; i <= 500; i++) {
    sum2 += i;
}
let average = sum2 / 500;
console.log(average);

//7
let sum3 = 0;
for (let i = 30; i <= 80; i++) {
    if (i % 2 === 0) {
        sum3 += i;
    }
}
console.log(sum3);

//8
for (let i = 100; i <= 200; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}

//9
let num1 = 36;
for (let i = 1; i <= num1; i++) {
    if (num1 % i === 0) {
        console.log(i);
    }
}

//10
let num2 = 36;
let count = 0;
for (let i = 1; i <= num2; i++) {
    if (num2 % i === 0 && i % 2 === 0) {
        count++;
    }
}
console.log(count);

//11
let num3 = 36;
let sum4 = 0;
for (let i = 1; i <= num3; i++) {
    if (num3 % i === 0 && i % 2 === 0) {
        sum4 += i;
    }
}
console.log(sum4);

//12
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i*j}`);
    }
}





