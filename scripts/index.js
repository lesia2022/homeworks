'use strict';

const ladder = {
    step: 0,
    up: function() {
        this.step++;
        return this;
    },
    down: function() {
        this.step--;
        return this;
    },
    showStep: function() {
        return this.step;
    }
};

const stepValue = ladder.up().up().down().showStep();
console.log(stepValue);

