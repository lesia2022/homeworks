'use strict';
function isPositiveNumber(num) {
    return typeof num === "number" && num > 0;
}

function getPositiveNumbers(arr) {
    const exampleArr = [];

    if (arr.length === 0) {
        return "blank array";
    }

    for (let i = 0; i < arr.length; i++) {
        if (isPositiveNumber(arr[i])) {
            exampleArr.push(arr[i]);
        }
    }

    if (exampleArr.length !== 0) {
        return exampleArr;
    } else {
        return null;
    }
}

const arr = [1, 2, 3, -1, -2, -3];
console.log(getPositiveNumbers(arr)); // [1, 2, 3]
