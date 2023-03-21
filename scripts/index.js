'use strict';

const number = prompt('Enter the number :');
const exponentiation= prompt('Enter the exponentiation:');

function pow(number, exponentiation = 1) {
    if (typeof number !== 'number' || typeof exponentiation !== 'number') {
        return 'some error'
    }
    let result = Math.pow(number, exponentiation);
    return result;
}
let result = pow(number, exponentiation);
alert(result);







