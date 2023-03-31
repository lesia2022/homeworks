'use strict';

const calculatePotatoMass = (volume, countPerLiter, weightPerPotato) => {
    const potatoMassPerLiter = countPerLiter * weightPerPotato / 1000;
    const totalPotatoMass = potatoMassPerLiter * volume;
    return Math.ceil(totalPotatoMass);
}
function calculatePrice(mass, pricePerKg) {
    return pricePerKg * mass;
}

const volume = 48;
const countPerLiter = 4;
const weightPerPotato = 75;
const pricePerKg = 13;

const potatoMass = calculatePotatoMass(volume, countPerLiter, weightPerPotato);
const price = calculatePrice(potatoMass, pricePerKg);
console.log(`Для приготовления ${volume} л борща необходимо купить ${potatoMass} кг картошки, суммарная цена ${price}`);
