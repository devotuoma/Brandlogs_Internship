// Creating arrays
arr2 = ["black", "orange", "pink"];

// Javascript simply stores all the variables with their own data type and value in the array.
let arr = ["hi there", 5, true];
console.log(typeof arr[0]);
console.log(typeof arr[1]);
console.log(typeof arr[2]);





// When you define an array using const, you can change the values of a constant array, but you cannot change the array itself. Below is an example
const a = ["hire there"];
arr[0] = "new value";
console.log(arr[0]);

arr = ["nope, now you are overwriting the array"];

// The new value of the first element of the array is fine, but you cannot assign a new value to the full array
// TypeError: Assignment to a constant variable.





// Array Methods
//Part A : Adding and replacing elements
// We can add elements with the push() method:
favoriteFruits = ["grapefruit", "orange", "lemon"];
favoriteFruits.push("tangerine");
// Adds tangerine in the favorite fruits list at the end

let arr5 = [1, 2, 3];
let arr6 = [4, 5, 6];
let arr7 = arr5.concat(arr6); // Combines arr5 and arr6


//Part C: Finding Elements
arr8 = [2, 6, 7, 8];
let findValue = arr8.find(function(e) {return e === 6});
let findValue2 = arr8.find(e => e === 10);
console.log(findValue, findValue2);

// The log statement will log 6 and undefined because it can find an element that matches for 6, but not one that matches for 10


// Sorting

let names = ["James", "Alicia", "Fatiha", "Maria", "Bert"];
names.sort();
// Sorts the names in an alphabetical order

let ages = [ 18, 72, 33, 56, 40];
ages.sort();
