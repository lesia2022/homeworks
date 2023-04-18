'use strict';
//1
let array = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
let sum = 0;
let count = 0;
array.forEach(function(element) {
    if (element > 0) {
        sum += element;
        count++;
    }
});

console.log("Сума позитивних елементів: ", sum);
console.log("Кількість позитивних елементів: ", count);


//2
let min = Math.min(...array);
let index2 = array.indexOf(min);

console.log("Мінімальний елемент масиву: ", min);
console.log("Його порядковий номер: ", index2);


//3
let max = Math.max(...array);
let index3 = array.indexOf(max);

console.log("Максимальний елемент масиву: ", max);
console.log("Його порядковий номер: ", index3);


//4
let negatives = array.filter((element) => element < 0);

console.log("Кількість негативних елементів: ", negatives.length);


//5
let positives = array.filter((element) => element > 0 && element % 2 !== 0);

console.log("Кількість непарних позитивних елементів: ", positives.length);


//6
let count6 = array.filter(element => element > 0 && element % 2 === 0).length;

console.log("Кількість парних позитивних елементів: ", count6);


//7
let sum7 = array.reduce((accumulator, currentValue) => {
    if (currentValue > 0 && currentValue % 2 === 0) {
        return accumulator + currentValue;
    }
    return accumulator;
}, 0);

console.log("Сума парних позитивних елементів: ", sum7);


//8
let sum8 = array.reduce((accumulator, currentValue) => {
    if (currentValue > 0 && currentValue % 2 !== 0) {
        return accumulator + currentValue;
    }
    return accumulator;
}, 0);

console.log("Сума непарних позитивних елементів: ", sum8);


//9
let product = array.reduce((accumulator, currentValue) => {
    if (currentValue > 0) {
        return accumulator * currentValue;
    }
    return accumulator;
}, 1);

console.log("Добуток позитивних елементів: ", product);


//10
let max10 = Math.max(...array);
array = array.map(element => (element === max10) ? element : 0);
console.log(array);


