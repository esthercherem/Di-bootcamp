// <!-- Exercise 1 : Favorite Color
// Instructions
// let sentence = ["my","favorite","color","is","blue"];
// Write some simple Javascript code that will join all the items in the array above, and console.log the result. -->

let sentence = ["my","favorite","color","is","blue"];

console.log(sentence);

console.log(sentence.toString())
console.log(sentence.join())
console.log(sentence.join("+"))
console.log(sentence.join(" "))


// Exercise 2 : Mixup
// Instructions
// Create 2 variables. The values should be strings. For example:
// let str1 = "mix";
// let str2 = "pod";


// 2. Slice out and swap the first 2 characters of the two strings from part 1.


// 3. Create a third variable where the value is the concatenation of the two strings from the part 1 (separated by a space).


// 4. Finally console.log the new concatenated string.


let str1 = "mix";
let str2 = "pod";

let str1FirstTwo = str1.slice(0,2);
let str2FirstTwo = str2.slice(0,2);
console.log(str1FirstTwo);
console.log(str2FirstTwo);


str1 = str1.replace(str1FirstTwo, str2FirstTwo);
str2 = str2.replace(str2FirstTwo, str1FirstTwo);

console.log(str1)
console.log(str2)

let newWord = str1 + " " + str2;
console.log(newWord);

let firstWord = "Hello";
let secondWord = "World";
// let thirdWord should be equal to 'Wollo Herld'

firstWord.slice(0,2);
secondWord.slice(0,2);


// Exercise 3 : Calculator
// Instructions
// Make a Calculator. Follow the instructions:

// Prompt the user for the first number.
// Store the first number in a variable called num1.
// Hint : console.log the type of the variable num1. What should you do to convert it to a number ?
// Prompt the user for the second number.
// Store the second number in a variable called num2.
// Create an Alert where the value is the SUM of num1 and num2.


let num1 = parseFloat(prompt("enter the first number: "));
let num2 = parseFloat(prompt("enter the second number: "));
let sum = num1 + num2;
alert("the sum of " + num1 + "and " + num2 + "is" + sum);


// BONUS: Make a program that can subtract, multiply, and also divide!

let number1 = parseFloat(prompt("enter the first number: "));
let number2 = parseFloat(prompt("enter the second number: "));
let operation = prompt("enter the operation you want to perform: +, *, -, /");

let result;

switch(operation) {
    case "+":
        result = number1 + number2;
        break;
     case "-":
        result = number1 - number2;
        break;
    case "*":
            result = number1 * number2;
         break;
    case "/":
            result = number1 / number2;
        break;   
    default:
        console.log("Invalid operation" );


}

if (result) {
    console.log ("result: " + result);
}