'use strict';
//1
const arr1 = ['a', 'b', 'c', 'd'];
const str1 = arr1.slice(0, 2).join('+') + ', ' + arr1.slice(2).join('+');
console.log(str1);


//2
const arr2 = [2, 5, 3, 9];
const result2 = arr2[0] * arr2[1] + arr2[2] * arr2[3];
console.log(result2);


//3
const arr3 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const num3 = arr3[1][0];
console.log(num3);


//4
const obj4 = {js:['jQuery', 'Angular'], php: 'hello', css: 'world'};
console.log(obj4.js[0]);


//5
const arr5 = [];
for (let i = 1; i <= 20; i++) {
    arr5.push('x'.repeat(i));
}
console.log(arr5);


//6
let arr6 = [];
for (let i = 1; i <= 9; i++) {
    arr6.push(String(i).repeat(i));
}
console.log(arr6);


//7
const arrayFill = (value, count) => {
    const arr = [];
    for (let i = 0; i < count; i++) {
        arr.push(value);
    }
    return arr;
}
console.log(arrayFill('x', 5));
console.log(arrayFill(10, 3));


//8
const sumToTen = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (sum > 10) {
            return i;
        }
    }
    return arr.length;
};

const arr = [1, 2, 3, 4, 5,];
console.log(sumToTen(arr));


//9
const reverseArray = (arr9) => {
    for (let i = 0; i < arr9.length / 2; i++) {
        let temp = arr9[i];
        arr9[i] = arr9[arr9.length - 1 - i];
        arr9[arr9.length - 1 - i] = temp;
    }
    return arr9;
}
const arr9 = [1, 2, 3];
console.log(reverseArray(arr9));

//10
const arr10 = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10, 11], [12]];
let sum10 = 0;
for (let i = 0; i < arr10.length; i++) {
    for (let j = 0; j < arr10[i].length; j++) {
        sum10 += arr10[i][j];
    }
}
console.log(sum10);

//11
const arr11 = [[[1, 2, 3], [4, 5, 6]], [[7, 8, 9], [10, 11, 55]]];
let sum11 = 0;

for (let i = 0; i < arr11.length; i++) {
    for (let j = 0; j < arr11[i].length; j++) {
        for (let k = 0; k < arr11[i][j].length; k++) {
            sum11 += arr11[i][j][k];
        }
    }
}

console.log(sum11);















