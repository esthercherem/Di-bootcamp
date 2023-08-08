// solucion 1
// import React from 'react';
// import Card from "./components/Card";
// import "./App.css";

// function App() {
//   return (
//     <div>
//       <h1>App</h1>
//       <Card info={{points: 3000, icon: "fa-solid fa-star", title:"Points"}}/>
//       <Card info={{points: 1000, icon: "fa-solid fa-diamond", title:"Diamonds"}}/>
//       <Card info={{points: 500, icon: "fa-solid fa-handshake-simple", title:"Shakas"}}/>
//       <Card info={{points: 200, icon: "fa-solid fa-bolt-lightning", title:"Lightning"}}/>
     
//     </div>
//   );
// }

// export default App;


// solucion 2
// import React from 'react';
// import Card from "./components/Card";
// import "./App.css";


// const cards = [
//   {points: 3000, icon: "fa-solid fa-star", title:"Points"},
//   {points: 1000, icon: "fa-solid fa-diamond", title:"Diamonds"},
//   {points: 500, icon: "fa-solid fa-handshake-simple", title:"Shakas"},
//   {points: 200, icon: "fa-solid fa-bolt-lightning", title:"Lightning"}
// ];

// function App () {
//   return (
//     <div>
//       <h1>App</h1>
//       <Card info={cards[0]}/>
//       <Card info={cards[0]}/>
//       <Card info={cards[0]}/>
//       <Card info={cards[0]}/>
//     </div>
//   )
// }

// export default App;





//solucion 3 

//  import React from 'react';
//  import Card from "./components/Card";
//  import "./App.css";


//  const cards = [
//    {points: 3000, icon: "fa-solid fa-star", title:"Points"},
//    {points: 1000, icon: "fa-solid fa-diamond", title:"Diamonds"},
//   {points: 500, icon: "fa-solid fa-handshake-simple", title:"Shakas"},
//    {points: 200, icon: "fa-solid fa-bolt-lightning", title:"Lightning"}
//  ];


//  function App (){
//   return (
//     <div>
//       <h1>App</h1>
//       {cards.map((card) => (
//         <Card info={card}></Card>
//       ))}
//     </div>
//   )
//  };

//  export default App



// //Solucion  4

import React from "react";
import Card from "./components/Card";
import "./App.css";

const cards = [
{points: 9000, icon: "fa-solid fa-star", title: "Points"},
{points: 8000, icon: "fa-solid fa-diamond", title: "Diamonds"},
{points: 7000, icon: "fa-solid fa-handshake-simple", title: "Shakas"},
{points: 6000, icon: "fa-solid fa-bolt-lightning", title: "Lightning"},
{points: 5000, icon: "fa-solid fa-star", title: "Points"},
{points: 4000, icon: "fa-solid fa-diamond", title: "Diamonds"},
{points: 3000, icon: "fa-solid fa-handshake-simple", title: "Shakas"},
{points: 2000, icon: "fa-solid fa-bolt-lightning", title: "Lightning"},
{points: 1000, icon: "fa-solid fa-star", title: "Points"},
{points: 900, icon: "fa-solid fa-diamond", title: "Diamonds"},
{points: 800, icon: "fa-solid fa-handshake-simple", title: "Shakas"},
{points: 700, icon: "fa-solid fa-bolt-lightning", title: "Lightning"},
];

function App() {
  return (
    <div className="app">
      <h1>App</h1>
   {cards.map((card, i) => (
    <Card info={card} key={i}/>
   ))}
  </div>
  )}
export default App;