'use strict';

 //task 23
function mainFunction(callback){
     const number = +prompt('Enter the number, please:');
     const power = +prompt('Enter the power, please:');
     callback(number, power);
 }

 function  exponentiation(number, power) {
     let result = Math.pow(number, power);
     alert(`Result: ${result}`);
 }

mainFunction(exponentiation);


//additional task first version of the solution

// function mainFunction(callback){
//     const number1 = +prompt('Enter the first, please:');
//     const number2 = +prompt('Enter the second, please:');
//     callback(number1, number2);
// }
//
// function  multiply(number1, number2) {
//     let result = number1 * number2;
//     alert(`Result multiply: ${result}`);
// }
// function  division(number1, number2) {
//     let result = number1 / number2;
//     alert(`Result division: ${result}`);
// }
// function  modulo(number1, number2) {
//     let result = number1 % number2;
//     alert(`Result modulo: ${result}`);
// }
//
// mainFunction(multiply);
// mainFunction(division);
// mainFunction(modulo);


//additional task second version of the solution

// function mainFunction(callback){
//     const operation = prompt('Which operation do you want to perform: multiply, divide or modulo?');
//     const number1 = +prompt('Enter the first number, please:');
//     const number2= +prompt('Enter the second number, please:');
//
//     switch (operation) {
//         case 'multiply':
//             callback(number1 * number2);
//             break;
//         case 'divide':
//             callback(number1 / number2);
//             break;
//         case 'modulo':
//             callback(number1 % number2);
//             break;
//         default:
//             alert('You chose the wrong operation');
//             return;
//     }
// }
//
// function showMessage(result) {
//     alert('Result: ' + result);
// }
//
// mainFunction(showMessage);

