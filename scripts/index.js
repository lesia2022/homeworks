'use strict';

const number = +prompt('Enter the number :');
const exponentiation= +prompt('Enter the exponentiation:');

function pow(number, exponentiation = 1) {
    if (Number.isNaN(number) || Number.isNaN(exponentiation)) {
        return 'some error'
    }
    return Math.pow(number, exponentiation);
}
const result = pow(number, exponentiation);
alert(result);







