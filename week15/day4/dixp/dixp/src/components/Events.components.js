// excercise 2 events part 1

// import React from "react";

// // const clickMe = () => console.log("I was clicked");
// const clickMe = () => alert("I was clicked");

// export class Events extends React.Component {
//     render() {
//         return (
//             <>
//             <p>hello from events components</p>
//             <button onClick={clickMe}>click</button>
//             </>
//         );
//     }
// }


// excercise 2 parte 2


// import React from "react";

// const clickMe = () => alert("I was clicked");

// const handleKeyPress = (e) => {
//     if (e.key !== "Enter") return;
//     const message = "the enter key was pressed, your input is: " + e.target.value;// target.value agarra lo que escribes en el input
//     alert(message);
// };

// export class Events extends React.Component {

//     render() {
//         return (
//             <>
//             <p> hello from Events component</p>
//             <button onClick={clickMe}>click</button>
//             <input type="text" onKeyDown={handleKeyPress}></input>
//             </>
//         );
//     }


// }



// EXCERCISE 2 PARTE 3


// import React from "react";

// const clickMe = () => alert("I was clicked");

// const handleKeyPress = (e) => {
//     if (e.key !== "Enter") return;
//     const message = "The enter key was pressed, your input is: " + e.target.value;
//     alert(message);
// };

// export class Events extends React.Component {
//     toggleButton = () => {
//         this.setState({isToggledOn: !this.state.isToggledOn});
//         console.log(this.state);
//     }
//     constructor(props) {
//         super(props);
//         this.state = {isToggledOn: true};
//     }
//     render() {
       
//         return (
//             <>
//             <p>Hello from Events components</p>
//             <button onClick={clickMe}>Click</button>
//             <input type="text" onKeyDown={handleKeyPress} />
//             <button onClick={this.toggleButton}>{this.state.isToggledOn ? "ON" : "OFF"}</button>
//             </>
//         );
//     }
// }


// EXERCISE 2 EVENTS PART 3 REFACTORED WITH FUNCTIONS INSTEAD OF CLASSES:


import React, { useState } from "react";

const clickMe = () => alert("I was clicked");

const handleKeyPress = (e) => {
  if (e.key !== "Enter") return;
  const message =
    "The enter key was pressed, your input is: " + e.target.value;
  alert(message);
};

export const Events = () => {
  const [isToggledOn, setIsToggledOn] = useState(true);

  const toggleButton = () => {
    setIsToggledOn(!isToggledOn);
    // console.log(isToggledOn);
  };

  return (
    <>
      <p>Hello from Events component</p>
      <button onClick={clickMe}>Click</button>
      <input type="text" onKeyDown={handleKeyPress} />
      <button onClick={toggleButton}>
        {isToggledOn ? "ON" : "OFF"}
      </button>
    </>
  );
};