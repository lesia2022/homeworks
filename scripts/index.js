'use strict';
function sum() {
    let a = 0;
    return function (b){
        a += b;
        return a;
    }
}
const add = sum();

console.log(add(3));
console.log(add(5));
console.log(add(20));
console.log(add(30));


