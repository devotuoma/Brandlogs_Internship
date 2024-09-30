// Variable Declaration
// Variables are always declared using `let`, `const`, and `var`

// Declare a variable with 'let'
let age = 25; // 'age' is a variable storing a number

// Declare a constant with 'const'
const birthYear = 1999; // 'birthYear' is a constant storing a number

// Declare a variable with 'var'
var name = "Alice"; // 'name' is a variable storing a string

// Outputting variables to the console
console.log(age);       // Output: 25
console.log(birthYear); // Output: 1999
console.log(name);      // Output: Alice

// Data Types
// JavaScript has a variety of data types, including:

// Number: represents numeric values.
// String: represents a sequence of characters.
// Boolean: represents true or false values.
// Object: represents a collection of properties
// Array: is a list of values.
// Undefined: is a variable that has been declared but not initialized
// Null: represents an intentional absence of value.


// Number
let score = 90;

// String
let greeting = "Hello, world"; // Corrected to match the actual output

// Boolean
let isStudent = true;

// Array
let colors = ["red", "green", "blue"];

// Object
let person = {
    name: "John",
    age: 30
};

// Undefined
let result; // 'result' is declared but not initialized

// Null
let emptyValue = null; // 'emptyValue' is explicitly set to 'null'

console.log(score);      // Output: 90
console.log(greeting);   // Output: Hello, world
console.log(isStudent);  // Output: true
console.log(colors);     // Output: ["red", "green", "blue"]
console.log(person);     // Output: { name: "John", age: 30 }
console.log(result);     // Output: undefined
console.log(emptyValue); // Output: null

// Conditionals and loops
// Conditionals
// Conditionals allow the execution of different code blocks based on different conditions.
// `if`, `else if`, `else`, and `switch` are the most common ways to express conditions.

// Example:
let score = 85;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: D");
}
 
// Switch Statement
let day = 3; // Assume day is a number representing the day of the week (1=Monday, 2=Tuesday, etc.)

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Weekend");
        break; // Ensure default case is terminated
}

// Loops
// Loops are used to repeat a block of code multiple times. Common loops include for, while, and do...while.

// For Loop
// Loop from 0 to 4
for (let i = 0; i <= 5; i++) {
  console.log(i); // Output: 0 1 2 3 4
}

// While Loop
let count = 0;

// Loop while count is less than 5
while (count < 5) {
    console.log(count); // Output: 0 1 2 3 4
    count++; // Increment count
}

// Do...While Loop
// Declare the variable here to avoid redeclaration issue
count = 0;

// Loop at least once and continue while count is less than 5
do {
    console.log(count); // Output: 0 1 2 3 4
    count++; // Increment count
} while (count < 5);

// Writing Functions
// Functions allow you to group code into reusable blocks. You can define a function using the function keyword, and you can call it later in your code.

// Function Declaration:
function add(a, b) {
  return a + b;
}

// Calling the function
let sum = add(5, 3);
console.log(sum); // Output: 8

// Function Expression:
// Function expression assigned to a variable
const multiply = function(x, y) {
  return x * y;
};

// Calling the function
let product = multiply(4, 6);
console.log(product); // Output: 24

// Arrow Function:
// Arrow function that subtracts two numbers
const subtract = (a, b) => a - b;

// Calling the function
let difference = subtract(10, 4);
console.log(difference); // Output: 6

// Function with Default Parameters:
// Function with default parameters
function greet(name = "Guest") {
  return `Hello, ${name}!`;
}

// Calling the function with and without an argument
console.log(greet("Alice")); // Output: Hello, Alice!
console.log(greet());       // Output: Hello, Guest!

// Function with Rest Parameters:
// Function that accepts any number of arguments
function sumAll(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

// Calling the function with multiple arguments
let total = sumAll(1, 2, 3, 4, 5);
console.log(total); // Output: 15





