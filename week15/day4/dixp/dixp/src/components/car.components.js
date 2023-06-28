// excercise 1 part 1: a car component

// import React from "react";

// const carinfo = { name: "Ford", model: "Mustang"};

// export class Car extends React.Component {
//     render() {
//         return (
//             <>
//             <header> This car is a {carinfo.model}</header>
//             <h1>This is a car</h1>
            
//             </>
//         )
//     }
// }


// excercise 1 parte 3 vieja escuela

// import React from "react";
// import {Garage} from "./garage.components";

// const carinfo = { name: "Ford", model: "Mustang"};

//  export class Car extends React.Component {
//     constructor() {
//         super();
//         this.state = {color: "red"};
//     }
//     render() {
//         return (
//             <>
//           <header> This car is a {carinfo.model}</header>
//             <h1>This is a car {this.state.color}</h1>
//             <p>Garage component:</p>
//             <Garage/>
//             <Garage size = "small"/>
//              </>
//          )
//     }
//  }


// excersice 1  de la manera facil

import React from "react";
import {Garage} from "./garage.components";

const carinfo = { name: "Ford", model: "Mustang"};

export function Car () {
    const color= "red";

    return (
        <>
        <header> This car is a {carinfo.model}</header>
        <h1>this car is {color}</h1>
        <p>Garage Component:</p>
        <Garage size="small" />
        <Garage size="medium" />
        <Garage size="big" />
        </>
    );
}


