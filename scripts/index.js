'use strict';
function iterateArray(arr) {
    let currentIndex = 0;
    let currentIterator = null;

    return {
        next: function() {
            if (currentIterator) {
                const { value, done } = currentIterator.next();
                if (!done) {
                    return { value, done: false };
                } else {
                    currentIterator = null;
                }
            }

            if (currentIndex >= arr.length) {
                return { done: true };
            }

            const currentItem = arr[currentIndex++];
            if (Array.isArray(currentItem)) {
                currentIterator = iterateArray(currentItem);
                return this.next();
            } else {
                return { value: currentItem, done: false };
            }
        }
    };
}

const array = [1, [2, 3, [4, 5]], 6, [7, 8]];
const iterator =iterateArray(array);

console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().done);
