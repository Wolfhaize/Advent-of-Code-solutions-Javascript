const input = require('./input');//import input from input.js

const GO_UP = '(';
const GO_DOWN = ')';

let final_floor = input
    .map(v => (v === GO_UP ? 1 : -1)) //map brackets to 1 or -1
    .reduce((a, b) => a + b, 0);// return the sum of all the elements in an array

console.log(`Santa ends up on floor "${final_floor}"`);
