
//Promises a core language feature to “simplify” asynchronous programming
// Creating a promise
const myPromise = new Promise((resolve, reject) => {
    // Do something asynchronous here
    let asyncOperationSuccessful = true; 

    if (asyncOperationSuccessful) {
        resolve("Operation was successful!"); 
    } else {
        reject("Operation failed!"); 
    }
});

// Consuming a promise
waitPromise().then((result) => {
    console.log("Success: ", result);
   }).catch((error) => {
    console.log("Error: ", error);
   });
   // if a function returns a Promise...
   waitPromise(1000).then(() => {
    console.log("Success!");
   }).catch((error) => {
    console.log("Error: ", error);
   });


// Handling the promise
myPromise
    .then(result => {
        console.log(result); 
    })
    .catch(error => {
        console.log(error); 
    });
