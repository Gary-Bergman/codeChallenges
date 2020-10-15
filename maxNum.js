// Write a function that takes in an array of numbers and outputs the maximum number.

// Ex:
// Input: [ 1, 2, 3 ]
// Output: 3

// Input: [ 3, 6, 4, 5, 2, 1 ]
// Output: 6

// Input: [ 3, 3, 3 ]
// Output: 3



const findMax = numArr => {
    let maxNum = numArr[0];
     for (let i = 1; i < numArr.length; i++) {
       if (numArr[i] > maxNum) {
         maxNum = numArr[i];
       }
     }
     return maxNum;
}

console.log(findMax([1, 2, 3]));
console.log(findMax([3, 6, 4, 5, 2, 1]));
console.log(findMax([ 3, 3, 3 ]));
console.log(findMax([5, 190, 3]));