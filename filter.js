// Write a function that takes an array of numbers and a function as parameters. The function parameter should return true if the input meets a certain condition or false otherwise. Your function should run the function parameter on every element in the array parameter and, if it returns true, add the element to a new array. Return the new array. 

// Ex:

// Input: [1, 2, 3]  function(num) { return num === 2 }
// Output: [2]

// Input: [1, 2, 3, 4, 5, 6]  function(num) { return num % 2 === 0 }
// Output: [2, 4, 6]

// Input: [1, 2, 3, 4, 5, 6]  function(num) { return num > 3 }
// Output: [4, 5, 6]

const filterFunc = (arr, cb) => {
    let newArray = [];
    arr.forEach(num => {
        if (cb(num)) {
            newArray.push(num)
        }
    });
    return newArray;
}

console.log(filterFunc([1, 2, 3], function(num) { return num === 2 }));
console.log(filterFunc([1, 2, 3, 4, 5, 6], function(num) { return num % 2 === 0 }));
console.log(filterFunc([1, 2, 3, 4, 5, 6], function (num) { return num > 3 }));


// Using filter method

const filterFunc2 = (arr, cb) => arr.filter(num => (cb(num)));

console.log(filterFunc2([1, 2, 3], function(num) { return num === 2 }));
console.log(filterFunc2([1, 2, 3, 4, 5, 6], function(num) { return num % 2 === 0 }));
console.log(filterFunc2([1, 2, 3, 4, 5, 6], function (num) { return num > 3 }));
