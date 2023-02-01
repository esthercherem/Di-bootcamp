// <!-- 

// excercise 1
// Instructions
// Store your favorite food into a variable.

// Store your favorite meal of the day into a variable (ie. breakfast, lunch or dinner)

// Console.log I eat <favorite food> at every <favorite meal> -->

    const favoriteFood = "apples"
    const favoriteMeal = "breakfast"

    console.log("I eat " + favoriteFood + " at every " + favoriteMeal)
    console.log(`I eat ${favoriteFood} at every ${favoriteMeal}`)



//     🌟 Exercise 2 : Series
// Instructions
// Part I
// Using this array : const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

// Create a variable named myWatchedSeriesLength that is equal to the number of series in the myWatchedSeries array.

// Create a variable named myWatchedSeriesSentence, that is equal to a sentence describing the series you watched
// For example : black mirror, money heist, and the big bang theory

// Console.log a sentence using both of the variables created above
// For example : I watched 3 series : black mirror, money heist, and the big bang theory


// Part II
// Change the series “the big bang theory” to “friends”. Hint : You will need to use the index of “the big bang theory” series.
// Add, at the end of the array, the name of another series you watched.
// Add, at the beginning of the array, the name of your favorite series.
// Delete the series “black mirror”.
// Console.log the third letter of the series “money heist”.
// Finally, console.log the myWatchedSeries array, to see all the modifications you’ve made.




const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
let myWatchedSeriesLength = myWatchedSeries.length;
console.log(myWatchedSeriesLength);

const myWatchedSeriesSentence = myWatchedSeries[0] +", " + myWatchedSeries[1] +" and " + myWatchedSeries[2];
console.log(myWatchedSeriesSentence);

const sentence = `I watched ${myWatchedSeriesLength} series: ${myWatchedSeriesSentence}`;
console.log(sentence);


 myWatchedSeries[2] = ("friends")
console.log(myWatchedSeries)

 myWatchedSeries.push("this is us")
console.log(myWatchedSeries)

 myWatchedSeries.unshift("love")
 console.log(myWatchedSeries)

delete myWatchedSeries[1]
console.log(myWatchedSeries)

 const moneyHeist = myWatchedSeries[2]
 console.log(moneyHeist[2])


// 🌟 Exercise 3 : The Temperature Converter
// Instructions
// Store a celsius temperature into a variable.

// Convert it to fahrenheit and console.log <temperature>°C is <temperature>°F.
// Hint : Should you create another variable to hold the temperature in fahrenheit? (ie. point 2)
// Hint: To convert a temperature from celsius to fahrenheit : Divide it by 5, then multiply it by 9, then add 32

const celsiusTemp = 20;
const fahrenheitTemp = celsiusTemp / 5 * 9 + 32
console.log(fahrenheitTemp)



// 🌟 Exercise 4 : Guess The Answers #1
// Instructions
// For each expression, predict what you think the output will be in a comment (//) without first running the command.
// Of course, explain each prediction.
// Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.



// For example

console.log(2+3)
// Prediction: It will output 5, because 2 and 3 are numbers
// Actual: 5


// Using the code below:

    let c;
    let a = 34;
    let b = 21;

    console.log(a+b) //first expression
    // Prediction: 55
    // Actual: 55

    a = 2;

    console.log(a+b) //second expression
    // Prediction: 23
    // Actual: 23



// What will be the outcome of a + b in the first expression ?
// What will be the outcome of a + b in the second expression ?
// What is the value of c?

// Analyse the code below, what will be the outcome?
// console.log(3 + 4 + '5');



// Exercise 5 : Guess The Answers #2
// Instructions
// For each expression, predict what you think the output will be in a comment (//) without first running the command.
// Of course, explain each prediction.
// Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.



// For example

typeof("potato")
// Prediction: Vegetable
// Actual: String


// What is the output of each of the expressions below?


typeof(15)
// Prediction: 15
// Actual: 15

typeof(5.5)
// Prediction: 5.5
// Actual: 5.5

typeof(NaN)
// Prediction:
// Actual: error

typeof("hello")
// Prediction: hello
// Actual: hello

typeof(true)
// Prediction: true
// Actual: true

typeof(1 != 2)
// Prediction: false
// Actual: false

"hamburger" + "s"
// Prediction: hamburguers
// Actual: hamburgers

console.log("hamburgers" - "s")
// Prediction: hamburguers1
// Actual: nan

console.log("1" + "3")
// Prediction: 4
// Actual: 13

console.log("1" - "3")
// Prediction: -2
// Actual: -2

console.log("johnny" + 5)
// Prediction: johnny5
// Actual: johnny5

console.log("johnny" - 5)
// Prediction: nan
// Actual: nan

console.log(99 * "hello")
// Prediction: nan string with number=error
// Actual: nan

console.log(1 != 1)
// Prediction: false
// Actual: false

console.log(1 == "1")
// Prediction: true
// Actual: true

console.log(1 === "1")
// Prediction: false
// Actual: false



// Exercise 6 : Guess The Answers #3
// Instructions
// For each expression, predict what you think the output will be in a comment (//) without first running the command.
// Of course, explain each prediction.
// Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.



// What is the output of each of the expressions below?


console.log(5 + "34")
// Prediction: 39
// Actual: 539

console.log(5 - "4")
// Prediction: 4
// Actual: 1

10 % 5
// Prediction: 0
// Actual:0

5 % 10
// Prediction:5
// Actual:5

"Java" + "Script"
// Prediction: "javascript"
// Actual:javascript

" " + " "
// Prediction: "  "
// Actual:"  "

" " + 0
// Prediction: " 0"
// Actual:" 0"

console.log(true + true)
// Prediction: 2
// Actual: 2

console.log(true + false)
// Prediction: 1
// Actual: 1

console.log(false + true)
// Prediction: 1
// Actual: 1

console.log(false - true)
// Prediction: 0
// Actual: -1

console.log(!true)
// Prediction: false
// Actual: false

console.log(3 - 4)
// Prediction: -1
// Actual: -1

console.log("Bob" - "bill")
// Prediction: error
// Actual: nan