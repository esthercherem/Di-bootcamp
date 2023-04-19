// 🌟 Exercise 1 : Find The Sum
// Instructions
// Create a one line function (ie. an arrow function) that receives two numbers as parameters and returns the sum.

const findSum = (num1, num2) => num1 + num2;

findSum (4,5)

// 🌟 Exercise 2 : Kg And Grams
// Instructions
// Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)

// First, use function declaration and invoke it.
// Then, use function expression and invoke it.
// Write in a one line comment, the difference between function declaration and function expression.
// Finally, use a one line arrow function and invoke it.

//function declaration
function convertToGrams (kg) {
    return kg * 1000;
}

//invoking function declaration 
console.log(convertToGrams(2));

// function expression

const convertToGramsExpr = function(kg) {
    return kg * 1000;

}

//invoking function expression

console.log(convertToGramsExpr(2)); //output 2000

//one line arrow function 
const convertToGramsArrow =kg => kg * 1000;

//invoking one line rrow function
console.log(convertToGramsArrow(2)); //output 2000





// 🌟 Exercise 3 : Fortune Teller
// Instructions
// Create a self invoking function that takes 4 arguments: number of children, partner’s name, geographic location, job title.
// The function should display in the DOM a sentence like "You will be a <job title> in <geographic location>, and married to <partner's name> with <number of children> kids."

(function(numChildren, partnerName, geoLocation, jobTitle) {
    const fortune = `you will be a ${jobTitle} in ${geoLocation}, and married to ${partnerName} with ${numChildren} kids.`;

    document.getElementById("fortune").innerHTML = fortune;
})

(2, "john", "new york", "web developer");



// 🌟 Exercise 4 : Welcome
// Instructions
// John has just signed in to your website and you want to welcome him.

// Create a Bootstrap Navbar in your HTML file.
// In your js file, create a self invoking funtion that takes 1 argument: the name of the user that just signed in.
// The function should add a div in the nabvar, displaying the name of the user and his profile picture.


(function(name) {
    const userProfile = document.getElementById("user-profile");
    userProfile.innerHTML = `
      <img src="https://via.placeholder.com/50" alt="Profile picture">
      <span class="ml-2">Welcome, ${name}!</span>
    `;
  })("John");



// 🌟 Exercise 5 : Juice Bar
// Instructions
// You will use nested functions, to open a new juice bar.

// Part I:
// The outer function named makeJuice receives 1 argument: the size of the beverage the client wants - small, medium or large.

// The inner function named addIngredients receives 3 ingredients, and displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".

// Invoke the inner function ONCE inside the outer function. Then invoke the outer function in the global scope.


// Part II:
// In the makeJuice function, create an empty array named ingredients.

// The addIngredients function should now receive 3 ingredients, and push them into the ingredients array.

// Create a new inner function named displayJuice that displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>". Use the forEach method.

// The client wants 6 ingredients in his juice, therefore, invoke the addIngredients function TWICE. Then invoke once the displayJuice function. Finally, invoke the makeJuice function in the global scope.





// PART 1
function makeJuice(size) {
    function addIngredients(ingredient1, ingredient2, ingredient3) {
      console.log(`The client wants a ${size} juice, containing ${ingredient1}, ${ingredient2}, ${ingredient3}.`);
    }
    addIngredients("apple", "carrot", "ginger");
  }
  makeJuice("medium");
  // Output: The client wants a medium juice, containing apple, carrot, ginger.
  
  
  // PART 2
  function makeJuice(size) {
    const ingredients = [];
  
    function addIngredients(ingredient1, ingredient2, ingredient3) {
      ingredients.push(ingredient1, ingredient2, ingredient3);
    }
  
    addIngredients("apple", "carrot", "ginger");
    addIngredients("orange", "kale", "celery");
  
    function displayJuice() {
      console.log(`The client wants a ${size} juice, containing ${ingredients.join(', ')}.`);
    }
  
    displayJuice();
  }
  
  makeJuice("large");
  // Output: The client wants a large juice, containing apple, carrot, ginger, orange, kale, celery.
 