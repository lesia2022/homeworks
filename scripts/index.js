'use strict';
const x = 4;
const y = 9;
const R = 10;
const d = Math.sqrt(x*x + y*y);

const message = (d <= R) ? 'The point lies inside a circle or on its boundary' : 'The point is outside the circle';
console.log(message);
