// JavaScript Array length
// The length property returns the length (size) of an array:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let size = fruits.length;


// JavaScript Array toString()
// The JavaScript method toString() converts an array to a string of (comma separated) array values.
const fruit = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruit.toString();

// JavaScript Array at()
const fruit1 = ["Banana", "Orange", "Apple", "Mango"];
let frut = fruit1.at(2);

// JavaScript Array join()
// The join() method also joins all array elements into a string.

// It behaves just like toString(), but in addition you can specify the separator:
const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits3.join(" * ");



// JavaScript Array pop()
// The pop() method removes the last element from an array:
const fruits4 = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();

// The pop() method returns the value that was "popped out":


const fruits5 = ["Banana", "Orange", "Apple", "Mango"];
let frit = fruits5.pop();

// JavaScript Array push()
// The push() method adds a new element to an array (at the end):
const fruits6 = ["Banana", "Orange", "Apple", "Mango"];
fruits6.push("Kiwi");

// The push() method returns the new array length:
const fruits7 = ["Banana", "Orange", "Apple", "Mango"];
let length = fruits7.push("Kiwi");


// JavaScript Array shift()
// The shift() method removes the first array element and "shifts" all other elements to a lower index.
const fruits8 = ["Banana", "Orange", "Apple", "Mango"];
fruits8.shift();

// The shift() method returns the value that was "shifted out":
const fruits9 = ["Banana", "Orange", "Apple", "Mango"];
let fruit9 = fruits.shift();

// JavaScript Array slice()
// The slice() method slices out a piece of an array into a new array:
const fruits11 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits11.slice(1);

// Slice out a part of an array starting from array element 3 ("Apple"):
const fruits12 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus2 = fruits12.slice(3);

