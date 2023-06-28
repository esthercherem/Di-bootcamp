

// import React from "react";

// export class Phone extends React.Component {

// }

//Instead of React.Component import Comp
//directly from react then reduce syntax in export.


//Part I : Phone

// import React, { Component } from "react";

// export class Phone extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             brand: "Samsung",
//             model: "Galaxy S20",
//             color: "black",
//             year: 2020
//         };
//     }
//     render() {
//         return <p>This phone brand is : {this.state.brand}</p>;
//     }
// }



//Part II : Change the Phone


// import React, { Component } from "react";

// // const changeColor = () => console.log("change color");

// export class Phone extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             brand: "Samsung",
//             model: "Galaxy S20",
//             color: "black",
//             year: 2020
//         };
//     }
//     // changeColor = () => console.log("change color");

//     changeColor = (e) => this.setState( {color: "blue"} );

//     render() {
//         return (
//         <>
//             <h2>This phone brand is : {this.state.brand}</h2>
//             <h3>It´s a {this.state.color} {this.state.model} from {this.state.year}</h3>
//             {/* <button onClick={changeColor}>Change Color</button> */}
//             <button onClick={this.changeColor}>Change Color</button>
//         </>
//         );
//     }
// }


// to console log changeColor arrow function do: 
// changeColor = (e) => {
//     this.setState( {color: "blue"} );
//     console.log(this.state);
// };



//SWITCH FROM CLASS COMPONENT TO FUNCTIONAL COMPONENT

// import React, { useState } from "react";

// export const Phone = () => {
//     const [brand] = useState("Samsung");
//     const [model] = useState("Galaxy S20");
//     const [color, setColor] = useState("black");
//     const [year] = useState(2020);

//     const changeColor = () => setColor("blue");

//     return (
//         <>
//             <h2>This phone brand is: {brand}</h2>
//             <h3>It's a {color} {model} from {year}</h3>
//             <button onClick={changeColor}>Change Color</button>
//         </>
//     );
// };



// OPTION B


import React, { useState } from "react";

export const Phone = () => {
  const [phone, setPhone] = useState({
    brand: "Samsung",
    model: "Galaxy S20",
    color: "black",
    year: 2020,
  });

  const changeColor = () => {
    setPhone((prevPhone) => ({ ...prevPhone, color: "blue" }));
  };

  return (
    <>
      <h2>This phone brand is: {phone.brand}</h2>
      <h3>It's a {phone.color} {phone.model} from {phone.year}</h3>
      <button onClick={changeColor}>Change Color</button>
    </>
  );
};

