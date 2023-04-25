'use strict';
// Создайте объект calculator (калькулятор) с тремя методами:
// read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.
//
//     let calculator = {
// // ... ваш код ...
// };
// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );
//
// Не забывайте преобразовывать данные в нужный тип после запроса + написать проверку на эти данные

// let calculator = {
//     number1: 0,
//     number2: 0,
//     read: function() {
//         this.number1 = +prompt('Enter the first number:', 0);
//         while (isNaN(this.number1)) {
//             this.number1 = +prompt('Incorrect input! Enter the first number:', 0);
//         }
//         this.number2 = +prompt('Enter the second number:', 0);
//         while (isNaN(this.number2)) {
//             this.number2 = +prompt('Incorrect input! Enter the second number:', 0);
//         }
//     },
//     sum: function() {
//         return this.number1 + this.number2;
//     },
//     mul: function() {
//         return this.number1 * this.number2;
//     }
// };
// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );

let calculator = {
    num1: null,
    num2: null,
    read() {
        this.num1 = +prompt('Введите первое число:');
        this.num2 = +prompt('Введите второе число:');
    },
    sum() {
        return this.num1 + this.num2;
    },
    mul() {
        return this.num1 * this.num2;
    },
    calculate(operation) {
        const result = operation === '+' ? this.sum() : this.mul();
        return result;
    }
};

calculator.read();

const operation = prompt('Выберите операцию: + (сложение) или * (умножение)');
const result = calculator.calculate(operation);

alert(result);
calculator.read();
alert( calculator.sum(96. 96) );
alert( calculator.mul() );