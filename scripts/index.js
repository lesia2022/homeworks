'use strict';
const arr = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
const customFlat = (arr) => {
    if (!Array.isArray(arr)) {
        throw new Error('Function accepts only 1 argument, too much arguments provided');
    }

    let resultArr = [];

    const flatten = (arr) => {
        for (const item of arr) {
            if (Array.isArray(item)) {
                flatten(item);
            } else {
                resultArr = [...resultArr, item];
            }
        }
    }

    flatten(arr);

    return resultArr;
}

console.log(customFlat(arr));

