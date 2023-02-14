// <!-- Exercise 1 : The World Translator
// Instructions
// Hint: Use Switch Case

// Ask the user which language they speak.

// Convert the user’s answer to lowercase, so that all the user’s inputs 
// will be accepted in the if statement. For example “english” or “English” 
// or “ENGlish” ect…”

// Create a few conditions :
// If the user speaks French : display “Bonjour”
// If the user speaks English : display “Hello”
// If the user speaks Hebrew : display “Shalom”
// If the user doesn’t speak any of these 3 languages: 
// display ‘01110011 01101111 01110010 01110010 01111001’ -->


  let language = prompt("Which language do you speak?");
language = language.toLowerCase();

switch (language) {
  case "french":
    console.log("Bonjour");
    break;
  case "english":
    console.log("Hello");
    break;
  case "hebrew":
    console.log("Shalom");
    break;
  default:
    console.log("01110011 01101111 01110010 01110010 01111001");
}


// <!-- In this example, the user is prompted to enter the language they speak, 
// and the input is converted to lowercase using the toLowerCase() method. 
// Then, a switch statement is used to check the value of the language variable 
// and display the appropriate message based on the user's input. -->



// <!-- Exercise 2 : The Grade Assigner
// Instructions
// Ask the user for their grade.

// If the grade is bigger than 90, console.log “A”

// If the grade is between 80 and 90 (included), console.log “B”
// If the grade is between 70(included) and 80 (included), console.log “C”
// If the grade is lower than 70, console.log “D” -->


let grade = parseFloat(prompt("Please enter your grade:"));

if (grade >= 90) {
  console.log("A");
} else if (grade >= 80 && grade < 90) {
  console.log("B");
} else if (grade >= 70 && grade < 80) {
  console.log("C");
} else if (grade < 70) {
  console.log("D");
}



// <!-- Exercise 3 : Verbing
// Instructions
// Prompt the user for a string. It must be a verb.
// If the length of the string is at least 3 and the string doesn’t end with “ing”, 
// add ‘ing’ to the end of the string.
// If the length of the string is at least 3 and the string ends with “ing” add “ly” 
// to it’s end.
// If the length of the string is less than 3, leave it unchanged.
// Example:

//   The string is : "swim" , your program should console.log : "swimming"
//   The string is : "swimming", your program should console.log : "swimmingly"
//   The string is : "go" your program should console.log : "go" -->


  let verb = prompt("Please enter a verb:");
  
if (verb.length >= 3 && !verb.endsWith("ing")) {
  console.log(verb + "ing");
} else if (verb.length >= 3 && verb.endsWith("ing")) {
  console.log(verb + "ly");
} else if (verb.length < 3) {
  console.log(verb);
}


// <!-- Logical NOT (!)
// The logical NOT (!) (logical complement, negation) 
// operator takes truth to falsity and vice versa. It is typically used with boolean 
// (logical) values. When used with non-Boolean values, it returns false if its 
// single operand can be converted to true; otherwise, returns true.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT -->