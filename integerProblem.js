// Write a function that takes in an input and returns true if it’s an integer and false otherwise.

// Ex:
// Input: "7"
// Output: false

// Input: 7
// Output: true

// Input: 4.3
// Output: false


const isInteger = input => Math.floor(input) === input && typeof input === "number"



console.log(isInteger("7"));
console.log(isInteger(7));
console.log(isInteger(4.3));


// Solved #2

const isInteger2 = input => parseInt(input) === input

console.log(isInteger2("7"));
console.log(isInteger2(7));
console.log(isInteger2(4.3));


// Solved #3

const isInteger3 = input => Number.isInteger(input)



console.log(isInteger3("7"));
console.log(isInteger3(7));
console.log(isInteger3(4.3));