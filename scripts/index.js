'use strict';
//1
let arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const mergedArr = arr1.concat(arr2);
console.log(mergedArr);

//2
let arr3 = [1, 2, 3];
arr3.reverse();
console.log(arr3);

//3
const arr4 = [1,2,3];
arr4.push(4,5,6);
console.log(arr4);

//4
const arr5 = [1, 2, 3];
arr5.unshift(4, 5, 6);
console.log(arr5);

//5,6
const arr6= ['js', 'css', 'jq'];
console.log(arr6[0]);
console.log(arr6[arr6.length -1]);

//7
const arr7 = [1, 2, 3, 4, 5];
const newArr7 = arr7.slice(0, 3);
console.log(newArr7);

//8
const arr8 = [1, 2, 3, 4, 5];
const newArr8 = arr8.slice(3);
console.log(newArr8);

//9
let arr9 = [1, 2, 3, 4, 5];
arr9.splice(1,2);
console.log(arr9);

//10
const arr10 = [1, 2, 3, 4, 5];
const newArr10 = arr10.slice(1, 4);
console.log(newArr10);

//11
let arr11 = [1, 2, 3, 4, 5];
arr11.splice(3, 0, 'a', 'b', 'c');
console.log(arr11); // [1, 2, 3, 'a', 'b', 'c', 4, 5]

//12
const arr12 = [1, 2, 3, 4, 5];
arr12.splice(1, 0, 'a', 'b');
arr12.splice(6, 0, 'c');
arr12.push('e');
console.log(arr12);

//13
const arr13 = [3, 4, 1, 2, 7];
arr13.sort((a, b) => a - b);
console.log(arr13);

//14
const arr14 = [5, 6, 7, 8, 9];
const result14 = arr14.reduce((sum, current) => sum + current, 0);
console.log(result14);

//15
const arr15 = [5, 6, 7, 8, 9];
const squaredArr = arr15.map(num => num * num);
console.log(squaredArr);

//16
const arr = [1, -3, 5, 6, -7, 8, 9, -11];
const negativeNumbers = arr.filter((num) => num < 0);
console.log(negativeNumbers);

//17
const arr17 = [1, -3, 5, 6, -7, 8, 9, -11];
const newArr17 = arr17.filter(num => num % 2 === 0);
console.log(newArr17);

//18
const arr18= ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az'];
const filteredArr18 = arr18.filter(str => str.length > 5);
console.log(filteredArr18);

//19
const arr19 = [1, 'string', [3, 4], 5, [6, 7]];
function func1 (elem) {
    return Array.isArray(elem);
}
const newArr19 = arr19.filter(func1);
console.log(newArr19);

//20
const arr20 = [5, -3, 6, -5, 0, -7, 8, 9];
function func2(elem) {
    return elem < 0;
}
const newArr20 = arr20.filter(func2);
console.log(newArr20);


































