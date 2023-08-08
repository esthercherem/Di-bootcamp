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

 import React from 'react';
 import Card from "./components/Card";
 import "./App.css";


 const cards = [
   {points: 3000, icon: "fa-solid fa-star", title:"Points"},
   {points: 1000, icon: "fa-solid fa-diamond", title:"Diamonds"},
  {points: 500, icon: "fa-solid fa-handshake-simple", title:"Shakas"},
   {points: 200, icon: "fa-solid fa-bolt-lightning", title:"Lightning"}
 ];


 function App (){
  return (
    <div>
      <h1>App</h1>
      {cards.map((card) => (
        <Card info={card}></Card>
      ))}
    </div>
  )
 };

 export default App