// An empty arrow function returns undefined
const empty = () => {};

(() => "foobar")();
// Returns "foobar"
// (this is an Immediately Invoked Function Expression)

const simple = (a) => (a > 15 ? 15 : a);
simple(16); // 15
simple(10); // 10

const max = (a, b) => (a > b ? a : b);

// Easy array filtering, mapping, etc.
const arr = [5, 6, 13, 0, 1, 18, 23];

const sum = arr.reduce((a, b) => a + b);
// 66

const even = arr.filter((v) => v % 2 === 0);
// [6, 0, 18]

const double = arr.map((v) => v * 2);
// [10, 12, 26, 0, 2, 36, 46]

// More concise promise chains
promise
  .then((a) => {
    // …
  })
  .then((b) => {
    // …
  });

// Parameterless arrow functions that are visually easier to parse
setTimeout(() => {
  console.log("I happen sooner");
  setTimeout(() => {
    // deeper code
    console.log("I happen later");
  }, 1);
}, 1);

//The call(), apply(), and bind() methods work as expected with traditional functions, because we establish the scope for each of the methods:
const obj = {
    num: 100,
  };
  
  // Setting "num" on globalThis to show how it is NOT used.
  globalThis.num = 42;
  
  // A simple traditional function to operate on "this"
  const add = function (a, b, c) {
    return this.num + a + b + c;
  };
  
  console.log(add.call(obj, 1, 2, 3)); // 106
  console.log(add.apply(obj, [1, 2, 3])); // 106
  const boundAdd = add.bind(obj);
  console.log(boundAdd(1, 2, 3)); // 106

  //With arrow functions, since our add function is essentially created on the globalThis (global) scope, it will assume this is the globalThis

 