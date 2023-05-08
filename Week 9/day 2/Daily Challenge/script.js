// Instructions
// Create a form with two fields (name, last name) and a submit button.
// When you click the Send button, retrieve the data from the inputs, and append it on the DOM as a JSON string.
// The output should be:
// output


    //get the form and input fields
    const form = document.querySelector('form');
    const nameInput = document.querySelector('#name');
    const lastNameInput = document.querySelector('#lastName');

    //add an event listener to the form
    form.addEventListener('submit', (event) => {
        event.preventDefault(); //prevent the default form submission
        const data =  {   // create an pbject with the users data
        name: nameInput.value,
        lastName: lastNameInput.value,
        };


        const jsonData = JSON.stringify(data); //convert the data to a JSON string
        const output = document.createElement('p'); // create a new paragraph element
        output.textContent = jsonData; // set the text constent of the paragraph to the JSOON  string
        document.body.appendChild(output); // append the paragraph to the DOM.

    });
