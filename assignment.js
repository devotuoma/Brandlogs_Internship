// A function to get the first element of an array
function getFirstElement(array) {
    return array[0];
}

let numbersArray1 = [7, 9, 0, 4, 2];
console.log(getFirstElement(numbersArray1));

// A function to get the last element of an array
function getLastElement(array) {
    return array[array.length - 1];
}

let numbersArray2 = [7, 9, 0, 4, 2];
console.log(getLastElement(numbersArray2));

// A program to sort an array in decreasing order
function sortDescending(array) {
    return array.sort((a, b) => b - a);
}

let unsortedArray1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];
console.log(sortDescending(unsortedArray1));

// Sorting an array in ascending order
function sortAscending(array) {
    return array.sort((a, b) => a - b);
}

let unsortedArray2 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];
console.log(sortAscending(unsortedArray2));

// For loop to check if numbers from 0 to 15 are odd or even:
for (let number = 0; number <= 15; number++) {
    if (number % 2 === 0) {
        console.log(number + " is even");
    } else {
        console.log(number + " is odd");
    }
}

// Function to assign grades based on marks:
function assignGrade(mark) {
    if (mark >= 80) {
        return 'A';
    } else if (mark >= 70) {
        return 'B';
    } else if (mark >= 60) {
        return 'C';
    } else if (mark >= 50) {
        return 'D';
    } else {
        return 'F';
    }
}

let studentMarks = {
    David: 80,
    Thomas: 77,
    Jane: 60,
    Doris: 41,
    Gilbert: 20
};

for (let student in studentMarks) {
    console.log(student + ": " + assignGrade(studentMarks[student]));
}

// Conditional statement to find the largest of five numbers
let numberList = [-5, -2, -6, 0, -1];
let largestNumber = numberList[0];

for (let i = 1; i < numberList.length; i++) {
    if (numberList[i] > largestNumber) {
        largestNumber = numberList[i];
    }
}

alert("The largest number is " + largestNumber);
