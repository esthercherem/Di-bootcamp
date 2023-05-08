
// excercise 1 

const form =  document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;
    console.log(`Username: ${username}, Password: ${password}`);

});


// excercise 2

// use chick norris API : https://api.chicknorris.io/
//retrieve a random chuck joke in JSON format: https://api.chucknorris.io/jokes/random

// 1. create a new XMLHttpRequest object

let xhr = new XMLHttpRequest();

// 2. configure it: GET-REQUEST for the URL

xhr.open('GET', 'https://api.chucknorris.io/jokes/random');

//3. send the request over  the network
xhr.send();

//4. this will be called after the response is recieved

xhr.onload= function() {
    if(xhr.status != 200) {//analyze HTTP status of the respponse
        alert(`Error ${xhr.status}: ${xhr.statusText}`);
    } else { // show the result
        console.log(`Done ${xhr.response}`); // response is the server
    }

    };

    xhr.onerror = function() {
        alert("Request failed");
    };





    // EXCERCISE 3

//function to generate and display a response
function generateResponse() {


    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://api.chucknorris.io/jokes/random');

    xhr.send();

xhr.onload= function() {
    if(xhr.status != 200) {//analyze HTTP status of the respponse
        alert(`Error ${xhr.status}: ${xhr.statusText}`);
    } else { // show the result
        const response = JSON.parse(xhr.response);
        document.getElementById("response").textContent = response.value;

    }

    };
}

    // add event listener to button

    const button = document.getElementById("generate-response");
    button.addEventListener("click", generateResponse);





