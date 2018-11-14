// const square = function(x) {
//     return x * x;
// };

// // const squareArrow = (x) => {
// //     return x * x
// // }

// const squareArrow = (x) =>  x * x;

// console.log(squareArrow(5));

// const getFirstName = (name) => name.split(' ')[0];

// console.log(getFirstName('Ollie Pegram'));

const multiplyer = {
    numbers: [7,2,4,6,1],
    multiplyBy: 8,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
}

console.log(multiplyer.multiply());