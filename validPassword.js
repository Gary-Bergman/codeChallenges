// Write a function that takes a string as a parameter and determines if it is a valid password with the following constraints:

// 1. It must be at least 8 characters long
// 2. It must contain at least 1 capital letter
// 3. It must contain at least 1 lower case letter

// Output true if the string is a valid password or false otherwise.

// Ex:
// Input: RexTheDog
// Output: true

// Input: rexthedog
// Output: false

// Input: REXTHEDOG
// Output: false

// Input: Dog
// Output: false

const validPassword = str => {
    if (str.length >= 8 && str !== str.toUpperCase() && str !== str.toLowerCase()) {
        return true
    }
    return false;
}

console.log(validPassword("RexTheDog"));
console.log(validPassword("rexthedog"));
console.log(validPassword("REXTHEDOG"));
console.log(validPassword("Dog"));

// Condensed Version
const validPassword2 = str => str.length >= 8 && str !== str.toUpperCase() && str !== str.toLowerCase();

console.log(validPassword2("RexTheDog"));
console.log(validPassword2("rexthedog"));
console.log(validPassword2("REXTHEDOG"));
console.log(validPassword2("Dog"));