// Write a function that takes an array of integers as an input and outputs the first duplicate.

// Ex:
// Input: [ 2, 5, 6, 3, 5 ]
// Output: 5

// Input: [ 1, 3, 4, 1, 3, 4 ]
// Output: 1

// Input: [ 2, 4, 5 ]
// Output: undefined

const firstDuplicate = arr => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] === arr[j]) {
                return arr[i]
            }
        }
    }
}

console.log(firstDuplicate([ 2, 5, 6, 3, 5 ]));

console.log(firstDuplicate([ 1, 3, 4, 1, 3, 4 ]));

console.log(firstDuplicate([ 2, 4, 5 ]));