// Callback function example
// A function passed into another function as an argument, which is then invoked inside the outer function
function logQuote(quote) {
    console.log(quote);
}

function createQuote(quote, callback) {
    const myQuote = `Like I always say, '${quote}'`;
    callback(myQuote); // Call the callback with the modified quote
}

createQuote("WebApp I rocks!", logQuote); // Outputs: Like I always say, 'WebApp I rocks!'


// Synchronous callback example: Array sorting
let numbers = [4, 2, 5, 1, 3];
numbers.sort(function (a, b) {
    return a - b; // Sorting in ascending order
});
console.log(numbers); 


// Functional programming concept
// Functional programming requires avoiding mutability and focuses on using pure functions
// In the above example, sort() is not pure because it mutates the array, but using callbacks fits functional programming concepts


// Asynchronous callback example: Readline interface
// Callbacks are the most fundamental way for writing asynchronous JS code
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('How old are you? ', (answer) => {
    let description = answer;
    console.log(`You are ${description} years old!`);
    rl.close(); // Close the readline interface after capturing input
});


// Timers
// setTimeout() runs the callback function after a specified time period
const onesec = setTimeout(() => {
    console.log('hey'); // Output after 1 second
}, 1000);
console.log('hi'); // Output immediately

// setTimeout example with parameters
const myFunction = (firstParam, secondParam) => {
    console.log(`First param: ${firstParam}, Second param: ${secondParam}`);
};
// Runs after 2 seconds
setTimeout(myFunction, 2000, 'param1', 'param2'); // Outputs: First param: param1, Second param: param2 after 2 seconds


// setInterval() example
const intervalId = setInterval(() => {
    console.log('This runs every second');
}, 1000); // Run the callback every 1 second

// Stopping the interval after 5 seconds
setTimeout(() => {
    clearInterval(intervalId); // Stops the periodic execution of setInterval
    console.log('Stopped the interval');
}, 5000);


// Error Handling in Callbacks
// The first parameter of the callback function is typically for storing any error, while the second one is for the result
const fs = require('fs');
fs.readFile('/file.json', (err, data) => {
    if (err !== null) {
        console.log('Error:', err); // Log the error if any
        return; // Exit the function if an error occurred
    }
    // No errors, process the data
    console.log(data); // Log the file data
});
