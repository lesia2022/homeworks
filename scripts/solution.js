'use strict';
const ul = document.getElementById('ulId');
const liElements = ul.getElementsByTagName('li');
for (const li of liElements) {
    console.log(li.textContent);
}
console.log(`Total elements: ${liElements.length}`);
const liTextArray = Array.from(liElements).map(li => li.textContent);
console.log(liTextArray);