// Write a function that takes an array of numbers and returns an array with each number doubled. 

// Ex:
// Input: [1,2,3]
// Output: [2,4,6]

// Input: [-1,-2,-3]
// Output: [-2, -4, -6]

const numDoubled = arr => {
    doubledArray = [];
    arr.forEach(num => {
        doubledArray.push(num * 2)
    });
    return doubledArray;
}

console.log(numDoubled([1,2,3]));
console.log(numDoubled([-1, -2, -3]));


// Using the map method (Technically not creating a new function)
arr1 = [1, 2, 3];
const numDoubledMap = arr1.map(num => num * 2);
console.log(numDoubledMap);


arr2 = [-1, -2, -3];
const numDoubledMap2 = arr2.map(num => num * 2);
console.log(numDoubledMap2);