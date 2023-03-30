const input = require('./input');

const GO_UP = '(';
const GO_DOWN = ')';

let instructions = input.map(v => (v === GO_UP ? 1 : -1));//map brackets to 1 or -1

let accumulator = 0;
let i;
for (i = 0; i < instructions.length; i++) {//loop through array
    let instruction = instructions[i];//get the index of each item in array
    accumulator += instruction;//add one to both each time, aka increment the accumulator with each index

    if (accumulator < 0) {
        break;
    }
}

// The list in the puzzle is not zero-index based, so add one to our index here 
console.log(`Santa first enters the basement at instructions "${i + 1}"`);
