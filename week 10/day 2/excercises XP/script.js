// 🌟 Exercise 1 : Comparison
// Instructions
// Create a function called compareToTen(num) that takes a number as an argument.
// The function should return a Promise:
// the promise resolves if the argument is less than 10
// the promise rejects if argument is greater than 10.
// Test:

// //In the example, the promise should reject
// compareToTen(15)
//   .then(result => console.log(result))
//   .catch(error => console.log(error))

// //In the example, the promise should resolve
// compareToTen(8)
//   .then(result => console.log(result))
//   .catch(error => console.log(error))


function compareToTen(num) {
    return new Promise((resolve, reject)=> {
        if(num> 10) {
            resolve(`${num} is greater than or equal to 10`);
        } else {
            reject(`${num} is less than 10`);
        }
    });
}

// test cases

compareToTen(15)
.then(result => console.log(result))
.catch(error => console.log(error));

compareToTen(8)
.then(result => console.log(result))
.catch(error => console.log(error));


// 🌟 Exercise 2 : Promises
// Instructions
// Create a promise that resolves itself in 4 seconds and returns a “success” string.
// How can you make your promise from part 1 shorter using Promise.resolve() and console.log “success”?
// Add code to catch errors and console.log ‘Ooops something went wrong’.


// solution 1: using setTimeout

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("success");
    }, 4000);
});

myPromise
.then(result => console.log(result))
.catch(error => console.log('Ooooops something went wrong'));


// solution 2: usig Promise.resolve()
const myPromise3 = Promise.resolve("success");

myPromise3.then(result => console.log(result))
.catch(error => console.log ("Oooops something wet wrong"));






// 🌟 Exercise 3 : Resolve & Reject
// Instructions
// Use Promise.resolve(value) to create a promise that will resolve itself with a value of 3.
// Use Promise.reject(error) to create a promise that will reject itself with the string “Boo!”


const myPromise1 = Promise.resolve(3);
const myPromise2 = Promise.reject("Boo!");

myPromise1
.then(result => console.log(result))
.catch(error => console.log(error));

myPromise2
.then(result => console.log(result))
.catch(error => console.log(error));





// Exercise 4: Quizz - Not Mandatory
// Follow this tutorial and do the quizz until the page called “a few tricks with promises”.

