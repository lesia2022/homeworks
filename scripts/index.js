'use strict';
function totalValue (products) {
    if (products.length === 0) {
        return 0;
    }

    const productsPrices = new Map();

    products.forEach(([item, price]) => {
        productsPrices.set(item, price);
    });

    let totalCost = 0;
    productsPrices.forEach(price => {
        totalCost += price;
    });

    return totalCost;
}


const goods = [['t-shirt', 15], ['shorts', 25], ['socks', 5]];

console.log(totalValue (goods));
