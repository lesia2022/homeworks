'use strict';
function uniqueCharacterCount(str) {
    const uniqueCharter = new Set();
    Array.from(str).forEach(symbol => {
        uniqueCharter.add(symbol);
    });
    return uniqueCharter.size;
}

const string = "abracadabra";
console.log(uniqueCharacterCount(string));


