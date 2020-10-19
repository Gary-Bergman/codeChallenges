// Write a function that takes in a single word as a string and returns true if it’s a palindrome and false otherwise (a palindrome is spelled the same way forwards and backwards).

// Ex:
// Input: "noon"
// Output: true

// Input: "horse"
// Output: false

// Input: "racecar"
// Output: true

const palindrome = str => {
    let reverseStr = str.split("").reverse().join("");
    console.log(reverseStr);
    if (str === reverseStr) {
        return true
    }
    return false;
}


console.log(palindrome("noon"));
console.log(palindrome("horse"));
console.log(palindrome("racecar"));