'use strict';
function calculatePotatoesForBorsch(borschVolume) {
    return Math.ceil(borschVolume * 4 * 75 / 1000) * 13;
}
const borschVolume = 48;
console.log(`Total price of potatoes for ${borschVolume} liters of borsch is ${calculatePotatoesForBorsch(borschVolume)} UAH.`);


