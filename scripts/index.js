'use strict';
class Hamburger {
    constructor(size, stuffing) {
        if (size !== Hamburger.SIZE_SMALL && size !== Hamburger.SIZE_LARGE) {
            throw new Error("Invalid hamburger size.");
        }

        if (
            stuffing !== Hamburger.STUFFING_CHEESE &&
            stuffing !== Hamburger.STUFFING_SALAD &&
            stuffing !== Hamburger.STUFFING_POTATO
        ) {
            throw new Error("Invalid hamburger stuffing.");
        }

        this.size = size;
        this.stuffing = stuffing;
        this.toppings = [];
    }


    static SIZE_SMALL = { tugriks: 50, calories: 20 };
    static SIZE_LARGE = { tugriks: 100, calories: 40 };
    static STUFFING_CHEESE = { tugriks: 10, calories: 20 };
    static STUFFING_SALAD = { tugriks: 20, calories: 5 };
    static STUFFING_POTATO = { tugriks: 15, calories: 10 };
    static TOPPING_SPICE = { tugriks: 15, calories: 0 };
    static TOPPING_MAYO = { tugriks: 20, calories: 5 };

    addTopping(topping) {
        if (
            topping !== Hamburger.TOPPING_SPICE &&
            topping !== Hamburger.TOPPING_MAYO
        ) {
            throw new Error("Invalid hamburger topping.");
        }

        this.toppings.push(topping);
    }

    calculatePrice() {
        let totalPrice = this.size.tugriks + this.stuffing.tugriks;
        this.toppings.forEach(topping => {
            totalPrice += topping.tugriks;
        });
        return totalPrice;
    }

    calculateCalories() {
        let totalCalories = this.size.calories + this.stuffing.calories;
        this.toppings.forEach(topping => {
            totalCalories += topping.calories;
        });
        return totalCalories;
    }
}

let hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
hamburger.addTopping(Hamburger.TOPPING_MAYO);
hamburger.addTopping(Hamburger.TOPPING_SPICE);

let veganHamburger = new Hamburger(Hamburger.SIZE_LARGE, Hamburger.STUFFING_POTATO);
veganHamburger.addTopping(Hamburger.TOPPING_MAYO);
veganHamburger.addTopping(Hamburger.TOPPING_SPICE);

console.log("Calories: " + hamburger.calculateCalories());
console.log("Price: " + hamburger.calculatePrice());
console.log("Price with sauce: " + hamburger.calculatePrice());

console.log("Calories of veganHamburger: " + veganHamburger.calculateCalories());
console.log("Price of veganHamburger: " + veganHamburger.calculatePrice());

