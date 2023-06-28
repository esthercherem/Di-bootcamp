// part 3 garage

// import React from "react";

// export class Garage extends React.Component {
//     render() {
//         return <p>who lives in my garage?</p>
//     }
// }



// import React from "react";


// export class Garage extends React.Component {
//     constructor(props) {
//         super(props);
//         console.log(props);
//     }
//     render() {
//         return <p>who lives in my {this.props.size} garage?</p>
//     }
// }



// PROPER WAY WITHOUT CLASSES AND USING FUNCTIONS
// REMOVE THIS THERE IS NO THIS INSIDE OF A FUNCTION


//A

// import React from "react";


// export function Garage(props) {
//     return <p>Who lives in my {props.size} garage?</p>
// }


//B

// import React from "react";


// export function Garage(props) {
//     const size = props.size;
//     return <p>Who lives in my {size} garage?</p>
// }


//C

// import React from "react";


// export function Garage(props) {
//     const {size} = props;
//     return <p>Who lives in my {size} garage?</p>
// }


//D

import React from "react";


export function Garage({size}) {
    return <p>Who lives in my {size} garage?</p>
}