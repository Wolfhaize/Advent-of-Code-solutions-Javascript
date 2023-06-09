const input = require('./input');

let input_areas =  input.map(box => {
    let [a1, a2, a3] = box.split('x').map(n => +n);

    //`2*l*w + 2*w*h + 2*h*l`

    let a = a1 * a2;
    let b = a1 * a3;
    let c = a2 * a3;

    let min_side = Math.min((a, b, c));
    


    return (a * 2) + (b * 2) + (c * 2) + min_side;
});

let total_square_feet = input_areas.reduce((a, b) => a + b, 0);

console.log(`Elves will need to order ${total_square_feet} square feet of wrapping paper`);
