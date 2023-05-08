//excercise 1
// Create a form like the one above. The form should contain three inputs:
// a small text input asking for a name,
// a larger textarea input to write a message,
// a submit input (“Send”)

// When you click the Send button, the form will be submitted with a GET method. (you can use the same HTML file for the action url)
// Where will the sent data appear?


// 🌟 Exercise 2 : HTML Form #2
// Instructions
// Use the same form structure as Exercise 1.
// When you click the Send button, the form will be submitted with a POST method.(you can use the same HTML file for the action url)
// Where will the sent data appear? Hint : Look at the Network Tab

<form action="" method="GET">
    {/* // <form action="" method="POST"></form> */}
    <div>
        <label for="name">Name</label>
        <input id="name" type="text" value="John" name="name"></input>
    </div>
    <div>
        <label for="comments">Comments</label>
        <div>
            <textarea id="comments" cols="30" rows="10" name="comments">Hello this is a commnet.</textarea>

        </div>

    </div>
    <input type="submit" value="send"></input>
</form>


// 🌟 Exercise 3 : JSON Mario
// Instructions
// Using this code:

const marioGame = {
  detail : "An amazing game!",
  characters : {
      mario : {
        description:"Small and jumpy. Likes princesses.",
        height: 10,
        weight: 3,
        speed: 12,
      },
      bowser : {
        description: "Big and green, Hates princesses.",
        height: 16,
        weight: 6,
        speed: 4,
      },
      princessPeach : {
        description: "Beautiful princess.",
        height: 12,
        weight: 2,
        speed: 2,
      }
  },
}
// Convert this JS object into a JSON object. What happens to the nested objects ?


const hello = JSON.stringify(marioGame);
console.log("stringified:", hello);


// Convert and pretty print this JS object into a JSON object. Hint : Check out the JSON lesson on the platform.
// Use your web inspector to add a breakpoint. Check the values of the JSON object in the debugger.

// in HTTTP YOU CAN ONLY SEND STRINGS -  CHECK in console instead of network
// convert this JS object into a JSON object. what happens to the nested objects?
 



const stringified = JSON.stringify( marioGame, (key, value) => {
  //exclude porperties with key "speed"

  if (key === "speed") {
    return undefined;
  }

  //convert height and weight to meters and kilograms respectively
  if (key === "height") {
    return value + "m";
  }

  if (key === "weight") {
    return value + "kg";
  }
  return value;
}, 2);

console.log("stringified:", stringified);