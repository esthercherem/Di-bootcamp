// // Exercise XP 1 : React Error Boundary Simulation


// import React from 'react';
// import BuggyCounter from './BuggyCounter';
// import ErrorBoundary from './ErrorBoundary';

// function App() {
//   return (
//     <div>
//       <ErrorBoundary>
//         <BuggyCounter />
//       </ErrorBoundary>
//     </div>
//   );
// }

// export default App;



// EXERCISE 2

// import React from 'react';
// import Color from "./components/Color.Components"; 


// function App() {
//   return (
//     <>
//     <Color />
//     </>
//   );
// }

// export default App;



//EXERCISE 2


// import React from 'react';

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       favoritecolor: "red",
//       favoritecolor2: "red",
//       favoritecolor3: "red"
//     };
//   }

//   //Exercise 1
//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({favoritecolor: "yellow"})
//     }, 5000)
//   }

//   changeColorHeader = () => {
//     this.setState({favoritecolor2: "blue"});
//   }

//   //Exercise 3
//   shouldComponentUpdate() {
//     return true;
//     //return false;
//   }
//   changeColor = () => {
//     this.setState({favoritecolor3: "blue"});
//   }


//   render() {
//     return (
//       <div>
//       <p>Exercise 1:</p>
//       <h1>My Favorite Color is <em>{this.state.favoritecolor}</em></h1>

//       <p>Exercise 2:</p>
//       <h1>My Favorite Color is {this.state.favoritecolor2}</h1>
//       <button type="button" onClick={this.changeColorHeader}>Change color</button>

//       <p>Exercise 3:</p>
//       <h1>My Favorite Color is <em>{this.state.favoritecolor3}</em></h1>
//       <button type="button" onClick={this.changeColor}>Change color</button>
//       </div>
//     );
//   }
// }

// export default App;




// EXERCISE XP #2 REACT LIFECYCLES


// import React from 'react';


// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       favoritecolor: "red",

//       //Exercise 3
//       show: true
//     };
//   }
//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({favoritecolor: "yellow"})
//     }, 5000)
//   }

//   //Exercise 1
//   // componentDidUpdate() {
//   //   document.getElementById("mydiv").innerHTML =
//   //   "The updated favorite is " + this.state.favoritecolor;
//   // }

//   //Exercise 2
//   getSnapshotBeforeUpdate(prevProps, prevState) {
//     document.getElementById("div1").innerHTML =
//     "Before the update, the favorite was " + prevState.favoritecolor;
//   }

//   //Exercise 2
//   componentDidUpdate() {
//     document.getElementById("div2").innerHTML =
//     "The updated favorite is " + this.state.favoritecolor;
//   }

//   //Exercise 3
//   delHeader = () => {
//     this.setState({show: false});
//   }

//   render() {

//     //Exercise 3
//     let myheader;
//     if (this.state.show) {
//       myheader = <Child />;
//     };


//     return (
//       <div>

//       <p>Exercise 1:</p>
//       <h1>My Favorite Color is {this.state.favoritecolor}</h1>
//       <div id="mydiv"></div>

//       <p>Exercise 2:</p>
//       <h1>My Favorite Color is {this.state.favoritecolor}</h1>
//       <div id="div1"></div>
//       <div id="div2"></div>

//       <p>Exercise 3:</p>
//       {myheader}
//       <button type="button" onClick={this.delHeader}>Delete Header</button>


//       </div>
//     );
//   }
// }

// //Exercise 3
// class Child extends React.Component {
//   componentWillUnmount() {
//     alert("The component named Header is about to be unmounted.");
//   }
//   render() {
//     return (
//       <h1>Hello World!</h1>
//     );
//   }
// }

// export default App;