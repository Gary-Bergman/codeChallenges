// Write a function that takes in an array of integers and the array with duplicates removed

// Ex:
// Input: [1,2,2,3]
// Output: [1,2,3]

// Input: [4,5,4,4,7,5]
// Output: [4,5,7]

// Input: [1,2,3,5]
// Output: [1,2,3,5]


// foreach and includes method

const dupRemoved = arr => {
    let newArr = []
    arr.forEach(num => { 
        if (!newArr.includes(num)) {
            newArr.push(num)
        }
    });
    return newArr;
}

console.log(dupRemoved([1, 2, 2, 3]));
console.log(dupRemoved([4,5,4,4,7,5]));
console.log(dupRemoved([1, 2, 3, 5]));



// filter and indexOf method

const dupRemoved2 = arr => {
    let newArr2 = arr.filter((c, index) => {
        return arr.indexOf(c) === index;
    });
    return newArr2;
}

console.log(dupRemoved2([1, 2, 2, 3]));
console.log(dupRemoved2([4,5,4,4,7,5]));
console.log(dupRemoved2([1,2,3,5]));