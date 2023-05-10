'use strict';
function generateList(array) {
    const listItems = array.map((item) => {
        if (Array.isArray(item)) {
            const nestedList = generateList(item);
            return `<li>${nestedList}</li>`;
        } else {
            return `<li>${item}</li>`;
        }
    });

    const list = listItems.join('');
    return `<ul>${list}</ul>`;
}
const array = [1, 2, [1.1, 1.2, 1.3], 3];
const result = generateList(array);
console.log(result);
