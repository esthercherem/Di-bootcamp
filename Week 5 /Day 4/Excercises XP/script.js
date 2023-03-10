// 🌟 Exercise 1 : Change The Article
// Instructions
// Copy the code below, into a structured HTML file:

//  <article>
//     <h1> Some Facts </h1>
//      <h2> The Chocolate </h2>
//     <h3> History of the chocolate </h3>
//      <p> Chocolate is made from tropical Theobroma cacao tree seeds. 
//      Its earliest use dates back to the Olmec civilization in Mesoamerica.</p>
//      <p> After the European discovery of the Americas, chocolate became 
//      very popular in the wider world, and its demand exploded. </p>
//      <p> Chocolate has since become a popular food product that millions enjoy every day, 
//      thanks to its unique, rich, and sweet taste.</p> 
//      <p> But what effect does eating chocolate have on our health?</p> 
//      <button id="bold-btn">Bold Text</button>
//  </article>


// Using a DOM property, retrieve the h1 and console.log it.
// const h1 = document.querySelector("h1");
// conosle.log(h1.textContent);

// Using DOM methods, remove the last paragraph in the <article> tag.

// const paragraphs = document.querySelectorAll("p");
// const lastParagraph = paragraphs[paragraphs.lenght - 1];
// lastParagraph.remove()



// Add a event listener which will change the background color of the h2 to red, when it’s clicked on.

// const h2 = document.querySelector("h2");
// h2.addEventListener("click", () => {
//     h2.style.backgroundColor = "Red";

// });



// Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).

// const h3 = document.querySelector("h3");
// h3.addEventListener("click", () => {
//     h3.style.display = "none";
// }
// )


// Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.

// const boldBtn = document.querySelector("#bold-btn");
// boldBtn.addEventListener("click", () => {
//     paragraphs.forEach(p=> {
//         p.style.fontWeight = "bold";
//     });
// })


// BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.(Check out this documentation)

// BONUS : When you hover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)
// const getRandomSize = () => Math.floor(Math.random() * 101);

//     h1.addEventListener('mouseenter', () => {
//         h1.style.fontSize = `${getRandomSize()}px`;
//     });

//     paragraphs[1].addEventListener('mouseenter', () => {
//         paragraphs[1].classList.add('fade');
//     });




// 🌟 Exercise 2 : Work With Forms
// Instructions
// Copy the code below, into a structured HTML file:

// <form>
//   <label for="fname">First name:</label><br>
//   <input type="text" id="fname" name="fname"><br>
//   <label for="lname">Last name:</label><br>
//   <input type="text" id="lname" name="lname"><br><br>
//   <input type="submit" value="Submit" id="submit">
// </form> 
// <ul class="usersAnswer"></ul>


// Retrieve the form and console.log it.

// Retrieve the inputs by their id and console.log them.

// Retrieve the inputs by their name attribute and console.log them.

// When the user submits the form (ie. submit event listener)
// use event.preventDefault(), why ?
// get the values of the input tags,
// make sure that they are not empty,
// create an li per input value,
// then append them to a the <ul class="usersAnswer"></ul>, below the form.
// The output should be :

// <ul class="usersAnswer">
//     <li>first name of the user</li>
//     <li>last name of the user</li>
// </ul>


//         const form = document.querySelector('form');
//         console.log(form);

//         const firstNameInput = document.querySelector('#fname');
//         const lastNameInput = document.querySelector('#lname');
//         console.log(firstNameInput, lastNameInput);

//         const firstNameInputByName = document.querySelector('input[name="fname"]'); //name attribute with the value of "fname".
//         const lastNameInputByName = document.querySelector('input[name="lname"]');
//         console.log(firstNameInputByName, lastNameInputByName);

//         const submitButton = document.querySelector('#submit');
//         const usersAnswerList = document.querySelector('.usersAnswer');

//         form.addEventListener('submit', function(event) {
//         event.preventDefault();
  
//         const firstName = firstNameInput.value.trim();
//         const lastName = lastNameInput.value.trim();
  
//         if (!firstName || !lastName) {
//             alert('Please enter both first name and last name');
//             return;
//         }
  
//         const firstNameLi = document.createElement('li');
//         firstNameLi.textContent = firstName;
  
//         const lastNameLi = document.createElement('li');
//         lastNameLi.textContent = lastName;
  
//         usersAnswerList.appendChild(firstNameLi);
//         usersAnswerList.appendChild(lastNameLi);
  
//         firstNameInput.value = '';
//         lastNameInput.value = '';
// });




// 🌟 Exercise 3 : Transform The Sentence
// Instructions
// Add this sentence to your HTML file then follow the steps :

// <p><strong>Hello</strong> I hope you are enjoying <strong>this</strong> class. At the
// <strong>end</strong> you <strong>will</strong> be great Developers!
// <strong>Enjoy</strong> the <strong>JavaScript </strong> lessons</p>


// In the JS file:

// Declare a global variable named allBoldItems.

// let allBoldItems;

// Create a function called getBold_items() that takes no parameter. This function should collect all the bold items inside the paragraph and assign them to the allBoldItems variable.

// function getBold_items() {
//     allBoldItems = document.getElementsByTagName("strong");
// }

// Create a function called highlight() that changes the color of all the bold text to blue.

// function highlight() {
//     for( let i = 0; i < allBoldItems.lenght; i++ ) {
//         allBoldItems[i].style.color = "blue";
//     }
// }

// Create a function called return_normal() that changes the color of all the bold text back to black.

// function return_normal() {
//     for ( let i = 0; i< allBoldItems.lenght; i++) {
//         allBoldItems[i].style.color = "black";
//     }
// }


// Call the function highlight() on mouseover (ie. when the mouse pointer is moved onto the paragraph), and the function return_normal() on mouseout (ie. when the mouse pointer is moved out of the paragraph). Look at this example


// getBold_items();

// document.querySelector("p").addEventListener("mouseover", highlight);
// document.querySelector("p").addEventListener("mouseout", return_normal);






// 🌟 Exercice 4 : Volume Of A Sphere
// Instructions
// Write a JavaScript program to calculate the volume of a sphere. Use the code below as a base:
// <!doctype html> 
// <html lang="en"> 
//     <head> 
//         <meta charset="utf-8"> 
//         <title>Volume of a Sphere</title> 
//         <style>  
//             body {
//                 padding-top:30px;
//             } 

//             label,input {
//                 display:block;
//             }  
//         </style> 
//     </head> 
//     <body> 
//         <p>Input radius value and get the volume of a sphere.</p> 
//         <form  id="MyForm"> 
//             <label for="radius">Radius</label><input type="text" name="radius" id="radius" required> 
//             <label for="volume">Volume</label><input type="text" name="volume" id="volume"> 
//             <input type="submit" value="Calculate" id="submit">    
//         </form> 
//     </body> 
// </html> 


// const formy = document.querySelector(`#MyForm`);
// const radiusInput = documnet.querySelector(`#radius`);
// const volumeInput = document.querySelector(`#volume`);

// formy.addEventListener(`submit`, (event) => {
//     event.preventDefault();

//     const radius = number(radiusInput.value);
//     const volume = (4/3) * Math.PI * Math.pow(radius, 3);

//     volumeInput.value = volume.toFixed(2);
// });



// Exercise 5 : Event Listeners
// Instructions
// Add many events listeners to one element on your webpage. Use the click, mouseover, mouseout and dblclick events.
// Each listener should do a different thing, for instance - change position x, change position y, change color, change the font size… and more.

const myButton = document.getElementById("myButton");

myButton.addEventListener("click", () => {
    myButton.style.backgroundColor = "grey";
    myButton.style.color = "black";
    myButton.style.fontSize = "18px";
    myButton.style.top = "0";
    myButton.style.left = "0";
});


myButton.addEventListener("mouseover", () => {
    myButton.style.backgroundColor = "green";
    myButton.style.color = "red";
    myButton.style.fontSize = "25px";
    myButton.style.top = "5";
    myButton.style.left = "5";
});


myButton.addEventListener("mouseout", () => {
    myButton.style.backgroundColor = "blue";
    myButton.style.color = "white";
    myButton.style.fontSize = "5px";
    myButton.style.top = "1";
    myButton.style.left = "0";
});


myButton.addEventListener("dbclick", () => {
    myButton.style.backgroundColor = "white";
    myButton.style.color = "yellow";
    myButton.style.fontSize = "15px";
    myButton.style.top = "3";
    myButton.style.left = "2";
});



