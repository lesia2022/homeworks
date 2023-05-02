'use strict';
const arr1 = [3, 9, 8, 7, 5, 3, 5, 2];
//indexOf
function imitationIndexOf(ar, item, from = 0) {
    for (let i = from; i < ar.length; i++) {
        if (ar[i] === item) {
            return i;
        }
    }
    return -1;
}
console.log(imitationIndexOf(arr1,8));
console.log(imitationIndexOf(arr1,3));
console.log(imitationIndexOf(arr1,11));
console.log(imitationIndexOf(arr1,5));
console.log(imitationIndexOf(arr1,5, 5));

//lastIndexOf
function imitationLastIndexOf(arr, value, fromIndex = arr.length - 1) {
    for (let i = fromIndex; i >= 0; i--) {
        if (arr[i] === value) {
            return i;
        }
    }
    return -1;
}
const index1 = imitationLastIndexOf(arr1, 5);
console.log(index1);

//find
function imitationFind(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            return arr[i];
        }
    }
    return undefined;
}
const result = imitationFind(arr1, (elem) => elem > 5);
console.log(result);

//findIndex
const arr2 = [1, 2, 3, 4, 5];
function imitationFindIndex(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            return i;
        }
    }
    return -1;
}
const index2 = imitationFindIndex(arr2, (item) => item === 3);
console.log(index2);

//includes
function imitationIncludes(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            return true;
        }
    }
    return false;
}
console.log(imitationIncludes(arr2, 3));
console.log(imitationIncludes(arr2, 6));

//every
function imitationEvery(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (!callback(arr[i], i, arr)) {
            return false;
        }
    }
    return true;
}
const arr3 = [1, 2, 3, 4, 5];
const arr4 = [2, 4, 6, 8, 10];
console.log(imitationEvery(arr3, (el) => el < 6));
console.log(imitationEvery(arr4, (el) => el % 2 === 0));
console.log(imitationEvery(arr3, (el) => el % 2 === 0));


//some
function imitationSome(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            return true;
        }
    }
    return false;
}
const numbers = [1, 2, 3, 4, 5];
const someResult = numbers.some((num) => num > 3);
console.log(someResult);


const imitationSomeResult = imitationSome(numbers, (num) => num > 3);
console.log(imitationSomeResult);


















