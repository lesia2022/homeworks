'use strict';
const elementUl = document.querySelector('#ulId');
const ElementsLi = elementUl.querySelectorAll('li');

const attributesUl = [];
const AttributeNamesUl = [];

for (const li of ElementsLi) {
    console.log(li.textContent);
}

for (const attribute of elementUl.attributes) {
    attributesUl.push(attribute.value);
}

for (const attribute of elementUl.attributes) {
    AttributeNamesUl.push(attribute.name);
}

console.log(attributesUl);
console.log(AttributeNamesUl);

const lastLi = ElementsLi[ElementsLi.length - 1];
const myName = 'Lesia';
lastLi.textContent = 'My name is ' + myName;

const firstLi = ElementsLi[0];
firstLi.setAttribute('data-my-name', myName);
console.log(firstLi);

elementUl.removeAttribute('data-dog-tail');

ElementsLi.forEach(li => console.log(li.textContent));










