// Write a function that takes in a single word as a string and returns true if it’s a palindrome and false otherwise (a palindrome is spelled the same way forwards and backwards).

// Ex:
// Input: "noon"
// Output: true

// Input: "horse"
// Output: false

// Input: "racecar"
// Output: true

// Solved using built in JS methods:

const palindrome = str => {
    let reverseStr = str.split("").reverse().join("");
    // console.log(reverseStr);
    if (str === reverseStr) {
        return true
    }
    return false;
}

console.log(palindrome("noon"));
console.log(palindrome("horse"));
console.log(palindrome("racecar"));


// Solution 2:
// No built in JS methods

const palindrome2 = str => {
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== str[str.length - (i + 1)]) {
            return false;
        }
    }
    return true;
}

console.log(palindrome2("noon"));
console.log(palindrome2("horse"));
console.log(palindrome2("racecar"));