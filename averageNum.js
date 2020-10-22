// Write a function that takes in an array of numbers and outputs the average of all the numbers.
// Ex:
// Input: [ 1 , 4 , 7 ]
// Output: 4

// Input: [ 10, 5 ]
// Output: 7.5

// Input: [ 1.5, 3, 2.5, 1 ]
// Output: 2


const averageNum = arr => {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    const average = sum / arr.length;
    return average;
}

console.log(averageNum([ 1 , 4 , 7 ]));
console.log(averageNum([ 10, 5 ]));
console.log(averageNum([ 1.5, 3, 2.5, 1 ]));