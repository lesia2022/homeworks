'use strict';
function DeepFreeze(obj) {
    Object.freeze(obj);


    Object.getOwnPropertyNames(obj).forEach((prop) => {
        let propValue = obj[prop];
        if (typeof propValue === 'object' && propValue !== null && !Object.isFrozen(propValue)) {
            DeepFreeze(propValue);
        }

        Object.defineProperty(obj, prop, {
            value: propValue,
            writable: false,
            configurable: false,
            enumerable: true
        });
    });

    return obj;
}

let user = {
    data: {
        a: 1,
        b: 2,
        c: 3,
        d: {
            a1: 1,
            b1: 2,
            c1: 3,
            d1: {
                a2: 3,
                b2: 3,
                c2: 3,
            },
        },
    },
};

DeepFreeze(user);

console.log(Object.isFrozen(user));
console.log(Object.isFrozen(user.data));
console.log(Object.isFrozen(user.data.d));
console.log(Object.isFrozen(user.data.d.d1));

user.data.a = 2;
user.data.d.a1 = 110;
user.data.d.d1.a2 = 1000;