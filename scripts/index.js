'use strict';

let a = 2; // создаем переменную a и присваиваем ей значение 2
let b = 3;
//1
console.log(a === 0 ? 'True' : 'False');

//2
console.log(a > 0 ? 'True' : 'False');

//3
console.log(a < 0 ? 'True' : 'False');

//4
console.log(a >= 0 ? 'True' : 'False');

//5
console.log( a <= 0 ? 'True' : 'False');

//6
console.log( a !== 0 ?  'True' : 'False');

//7
console.log (a === 'test' ? 'True' : 'False');

//8
console.log (a === 1 ? 'True' : 'False');

//9
console.log (a > 0 && a < 5 ? 'True' : 'False');

//10
if (a === 0 || a === 2) {
    a += 7;
} else {
    a /= 10;
}
console.log(a);

//11
let result;
if (a <= 1 && b >= 3) {
    result = a + b;
} else {
    result = a - b;
}
console.log(result);

//12
if ((a > 2 && a < 11) || (b >= 6 && b < 14)) {
    console.log('True');
} else {
    console.log('False');
}

//13
let num = 4;
switch (num) {
    case 1:
        result = 'Winter';
        break;
    case 2:
        result = 'Spring';
        break;
    case 3:
        result = 'Summer';
        break;
    case 4:
        result = 'Winter';
        break;
    default:
        result = 'Invalid value';
        break;
}
console.log(result);























