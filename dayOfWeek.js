// Write a function that takes in a number and returns the corresponding day of the week.

// Ex:
// Input: 1
// Output: 'Monday'

// Input: 5
// Output: 'Friday'

// Input: 8
// Output: undefined


const dayOfWeek = num => {
    switch (num) {
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
        case 7:
            day = "Sunday";
            break;
        default:
            day = "Please enter a number between 1 and 7."
    }

    return day;
}

console.log(dayOfWeek(1));
console.log(dayOfWeek(2));
console.log(dayOfWeek(3));
console.log(dayOfWeek(4));
console.log(dayOfWeek(5));
console.log(dayOfWeek(6));
console.log(dayOfWeek(7));
console.log(dayOfWeek(8));