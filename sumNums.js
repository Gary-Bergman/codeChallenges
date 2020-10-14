// Write a function that takes in an integer and outputs the sum of all the numbers from 1 to that integer.

// Ex:
// Input: 2
// Output: 3 (because 1 + 2 = 3)

// Input: 4
// Output: 10  (because 1 + 2 + 3 + 4 = 10)

// Input: 10
// Output: 55

function intSum(int) {
    var num = 0;
    for (i = 1; i <= int; i++) {
        num += i;
    }   
    return num
}
console.log(intSum(4));
console.log(intSum(10));

