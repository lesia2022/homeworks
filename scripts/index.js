'use strict';
//1
function getFactorial(n) {
    if (n <= 1) {
        return 1;
    } else {
        return n * getFactorial(n - 1);
    }
}
console.log(getFactorial(3));

//2
function pow(num, degree) {
    if (degree === 0) {
        return 1;
    } else if (degree === 1) {
        return num;
    } else if (degree < 0) {
        return 1 / pow(num, -degree);
    } else {
        return num * pow(num, degree - 1);
    }
}
console.log(pow(2,6));

//3
function recursiveSum(a, b) {
    if (b === 0) {
        return a;
    } else {
        return recursiveSum(a + 1, b - 1);
    }
}
console.log(recursiveSum(2,6));

