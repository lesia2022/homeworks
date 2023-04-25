'use strict';
let calculator = {
    sum() {
        return this.a + this.b;
    },

    mul() {
        return this.a * this.b;
    },

    read() {
        let a = +prompt('Enter the first number', '0');
        let b = +prompt('Enter the second number', '0');
        if (isNaN(a) || isNaN(b)) {
            return false;
        }

        this.a = +a;
        this.b = +b;
        return true;
    }
};

if (calculator.read()) {
    alert( calculator.sum() );
    alert( calculator.mul() );
} else {
    alert('Invalid input. Please enter a numbers.');
}
