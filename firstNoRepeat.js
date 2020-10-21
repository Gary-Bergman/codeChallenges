// Write a function that takes in a string and outputs the *first* occurrence of a character that does not repeat itself in that string.


// Ex:
// Input: “the quick brown fox jumps over the calm kitten quietly”
// Output: "b"

// Input: “this hat is the greatest!”
// Output: "g"

// Input: “what a wonderful day it has been!”
// Output: "o"

const noRepeat = str => {
    let strArray = str.split("");
    // console.log(strArray)
    for (let i = 0; i < strArray.length; i++) {
        let count = 0;
        for (let j = 0; j < strArray.length; j++) {
            if (strArray[i] === strArray[j]) {
               count++; 
            }
        }
        if (count === 1){
            return strArray[i];
        }
    }
}

console.log(noRepeat("the quick brown fox jumps over the calm kitten quietly"));

console.log(noRepeat("this hat is the greatest!"));

console.log(noRepeat("what a wonderful day it has been!"));

console.log(noRepeat("aabaaacbcdef"));