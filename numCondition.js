// Write a function that takes an array of numbers and a function as parameters. The function paremeter should return true if the input meets a certain condition or false otherwise. Your function should return true if the function parameter returns true for _any_ of the array elements in the array parameter or false otherwise. 

// Ex:

// Input: [1,2,3]  function(num){return num === 2}
// Output: true

// Input: [1,5,3]  function(num){return num === 2}
// Output: false

// Input: [1,2,3]  function(num){return num % 2 === 0}
// Output: true

// Input: [1,5,3]  function(num){return num % 2 === 0}
// Output: false

const numCondition = (arr, func) => {
    let count = 0;
    arr.forEach(num => {
        if (func(num)) {
            count++;
        }
    });
    if (count > 0) {
        return true;
    }
    return false;
}


console.log(numCondition([1,2,3], function(num){return num === 2}));
console.log(numCondition([1,5,3], function(num){return num === 2}));
console.log(numCondition([1,2,3], function(num){return num % 2 === 0}));
console.log(numCondition([1,5,3], function(num){return num % 2 === 0}));