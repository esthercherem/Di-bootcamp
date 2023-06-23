// import React from "react";
// import { UserFavoriteColors } from "./components/favoriteColors.components";

// excercise xp part 2-3

// // export function App() {
// //   const sum = 5+5;
// //   const myelement = <h1>React is {sum} time better with JSX</h1>
// //   return myelement;
// // }

// // OR

//  export function App() {
//    const sum= 5+5;
//   return <h1>React is {sum} time better with JSX</h1>
//  }

// excercise 3

// export function App() {
//   const user = {
//     firstName: 'bob',
//     lastName: 'dylan',
//     favAnimals: ['horse', 'turtle', 'elephant', 'monkey']
//   };
//   return (
//     <>
//     <h3>{user.firstName}</h3>
//     <h3>{user.lastName}</h3>
//     <UserFavoriteColors/>
//     </>
//   );
// }

// function UserFavoriteColors(){
//   return <p>favorite colors</p>;
// }




// export function App() {
//   const user = {
//     firstName: 'bob',
//     lastName: 'dylan',
//     favAnimals: ['horse', 'turtle', 'elephant', 'monkey']
//   };
//   return (
//     <>
//     <h3>{user.firstName}</h3>
//     <h3>{user.lastName}</h3>
//     <UserFavoriteColors favorites= {user.favAnimals}/>
//     </>
//   );
// }

// function UserFavoriteColors(props){
//   const favorites = props.favorites;
//   return <p>{favorites}</p>
// }

// function UserFavoriteColors(props){
//   const favorites = props.favorites;
//   return favorites.map((favorite, i) => <li key={i}>{favorite}</li>);
// }

import React from 'react';
import {Exercise4} from './components/Exercise4';

export const App = () => {
  return (
    <div>
      <Exercise4 />
    </div>
  );
};











