// 1. 2.


// import React, { Component } from "react";

// export class Color extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { favoriteColor: "red"};

//     }
//     render() {
//         return <h1> my favorite color is: {this.state.favoriteColor} </h1>;
//     }
// };


// 3.

// import React, { Component } from "react";





// 4.)


// import React, { Component } from "react";

// export class Color extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { favoriteColor: "red" };
//     }
//     changeColor = () => {
//         this.setState({ favoriteColor: "blue"});
//     }
//     render() {
//         return (
//             <>
//             <h1>My favorite color is : {this.state.favoriteColor}</h1>
//             <button onClick={ this.changeColor }>Change color to blue</button>
//             </>
//         )
//     }
//     componentDidMount() {
//         setTimeout(() => {
//             this.setState({ favoriteColor: "yellow" });
//         }, 5000);
//     }

// }



//OR WITHOUT CLASS

import React, { useState, useEffect } from "react";

export const Color = () => {
    const [favoriteColor, setFavoriteColor] = useState("red");
    const changeColor = () =>{
        setFavoriteColor("blue");
    }

    useEffect (() => {
        const timeout =setTimeout(() =>{
            setFavoriteColor("yellow");
        }, 5000);
        return () => clearTimeout(timeout);
    }, []);
    return (
        <>
        <h1>my favorite color ir: {favoriteColor}</h1>
        <button onClick={changeColor}> change color to blue</button>
        </>
    );
};


