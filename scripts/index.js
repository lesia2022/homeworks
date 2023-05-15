'use strict';
const customFlat = (...args) => {
    if (args.length > 1) {
        throw new Error('Function accepts only 1 argument, too many arguments provided');
    }

    const arr = args[0];
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
const arr = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
console.log(customFlat(arr));
