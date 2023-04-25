'use strict';
function generateRandomNum(range) {
    const numInRange = range => Math.floor(Math.random() * range) + 1;

    const getNextNum = () => {
        const numbers = [];
        return () => {
            let num = numInRange(range);
            while (numbers.includes(num)) {
                num = numInRange(range);
            }
            numbers.push(num);
            console.log("number = " + num + " count = " + numbers.length);
        };
    };
    const getNextUniqueNum = getNextNum();

    for (let i = 0; i < range; i++) {
        getNextUniqueNum();
    }
}

const range = 100;

generateRandomNum(range);
