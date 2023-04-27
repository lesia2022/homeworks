'use strict';

// Пример использования функции bind
const user = {
    name:'Karen'
}
function info(pet, breed) {
    console.log(`Name: ${this.name}, Pet:${pet}, Breed: ${breed}`)
}
function bind(fn, context, ...rest) {
    return function (...args){
        return fn.call(context, ...rest.concat(args))
    }
}
bind(info, user)('dog', 'beagle');
bind(info, user, 'dog')('beagle');
bind(info, user, 'dog','beagle')();












