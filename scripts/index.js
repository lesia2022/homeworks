'use strict';
const age = prompt("Введите ваш возраст");
if (isNaN(age)) {
    alert("Вы ввели не число");
} else {
    let years = "";
    const lastDigit = age % 10;
    if (age >= 11 && age <= 14) {
        years = "лет";
    } else if (lastDigit === 1) {
        years = "год";
    } else if (lastDigit >= 2 && lastDigit <= 4) {
        years = "года";
    } else {
        years = "лет";
    }
    alert(`Вам ${age} ${years}`);
}
