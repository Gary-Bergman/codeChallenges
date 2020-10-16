// Write a function that takes in a string and outputs the number of vowels (not counting y).

// Ex:
// Input: "hello"
// Output: 2

// Input: "you are great!"
// Output: 6

// Input: "why?"
// Output: 0

const numVowels = str => {
    let count = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u") {
            count++;
        }
    }
    return count
};

console.log(numVowels("hello"));
console.log(numVowels("you are great!"));
console.log(numVowels("why?"));

// Solution 2: ------------------------------

const numVowels2 = str => {
    let count = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    str = str.split("");
    // Could add .toLowerCase() if str has any capital letters too

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++
        }
    }
    return count;
}

console.log(numVowels2("hello"));
console.log(numVowels2("you are great!"));
console.log(numVowels2("why?"));