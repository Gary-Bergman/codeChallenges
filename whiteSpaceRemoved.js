// Write a function that takes in a string and and returns the string with white space removed and all letters changed to lowercase . This is a common task when a variable, routeName, etc needs to be created from user input.

// Ex:
// Input: Tammer Galal
// Output: tammergalal

// Input:    favorite tree    ever
// Output: favoritetreeever

// Input: one word
// Output: oneword


const whiteSpaceRemoved = str => str.toLowerCase().split(/\s/).join('');

console.log(whiteSpaceRemoved('Tammer Galal'));
console.log(whiteSpaceRemoved('    favorite tree    ever'))
console.log(whiteSpaceRemoved('one word'))


    

// Solved using more regex
const whiteSpaceRemoved2 = str => str.toLowerCase().replace(/\s/g,'');

console.log(whiteSpaceRemoved2('Tammer Galal'));
console.log(whiteSpaceRemoved2('    favorite tree    ever'))
console.log(whiteSpaceRemoved2('one word'))


// using no regex

const whiteSpaceRemoved3 = str => {
    let newStr = '';
    for (let i = 0; i < str.length; i++){
        if (str[i] !== " ") {
            newStr += str[i]
        }
    }
    return newStr.toLowerCase();
}

console.log(whiteSpaceRemoved3('Tammer Galal'));
console.log(whiteSpaceRemoved3('    favorite tree    ever'))
console.log(whiteSpaceRemoved3('one word'))