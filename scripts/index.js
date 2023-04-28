'use strict';
function Counter(num = 0) {
    let count = num;
    let callCounter = 0;
    function increase() {
        count++;
        callCounter++;
    }

    function decrease() {
        count--;
        callCounter++;
    }

    function value() {
        callCounter++;
        return count;
    }
function getStatistic(){
        return { callCounter };
}
function resetCounter () {
        count = 0;
}
    return {
        increase,
        decrease,
        value,
        getStatistic,
        resetCounter,
    };

}

let counter1 = Counter();
let counter2 = Counter();

counter1.increase();
counter1.increase();

console.log(counter1.value()); // 2
console.log(counter2.value()); // 0

counter1.decrease();
console.log(counter1.value()); // 1
console.log(counter2.value()); // 0

console.log(counter1.getStatistic().callCounter);
console.log(counter2.getStatistic().callCounter);

counter1.resetCounter();
console.log(counter1.value());

