import React, { Component } from "react";
import "./App.css";
import heroes from "./data/heroes.json";

export default class App extends Component {
  constructor() {
    super();
    this.state = {heroes: heroes.superheroes, clickedHeroes: [], score: 0, topScore: 0};
  }
  handleClick = (heroName) => {
    this.setState((state) => {
      const newScore = state.clickedHeroes.includes(heroName) ? 0 : state.score + 1;
      const clickedHeroes = state.clickedHeroes.includes(heroName) ? [] : [...state.clickedHeroes, heroName]
      return {
        heroes: [...state.heroes].sort((a, b) => (Math.random() > 0.5 ? -1 : 1)),
        clickedHeroes: clickedHeroes,
        score: newScore,
        topScore: Math.max(newScore, state.topScore)
      }; 
    });
  };

  render() {
    return (
      <div className="container">
        <nav className="navbar">
          <h1>Superheroes React Memory Game</h1>
        <div>Score: {this.state.score}</div>
        <div>TOP Score: {this.state.topScore}</div>
        </nav>
        <div className="rules">
          Get points by clicking on an image but do not click the same image twice.
        </div>
        <div className="heroes-container">
          {this.state.heroes.map((hero) => (
            <div key={hero.id} className="hero-card" onClick={() => this.handleClick(hero.name)}>
              <img src={hero.image} alt="heroimg"/>
              <p>
                <span className="bold">Name:</span>{hero.name}
              </p>
              <p>
                <span className="bold">Occupation:</span>{hero.occupation}
              </p>
              </div>
          ))}
        </div>
      </div>
    )
  }

}









// FUNCTIONAL COMPONENT


// import React, { useState } from "react";
// import "./App.css";
// import heroes from "./data/heroes.json";

// const App = () => {
// const [state, setState] = useState({
// heroes: heroes.superheroes,
// clickedHeroes: [],
// score: 0,
// topScore: 0,
// });

// const handleClick = (heroName) => {
// setState((prevState) => {
// const newScore = prevState.clickedHeroes.includes(heroName) ? 0 : prevState.score + 1;
// const clickedHeroes = prevState.clickedHeroes.includes(heroName)
// ? []
// : [...prevState.clickedHeroes, heroName];
// return {
//   heroes: [...prevState.heroes].sort((a, b) => (Math.random() > 0.5 ? -1 : 1)),
//   clickedHeroes: clickedHeroes,
//   score: newScore,
//   topScore: Math.max(newScore, prevState.topScore),
// };
// });
// };

// return (
// <div className="container">
// <nav className="navbar">
// <h1>Superheroes React Memory Game</h1>
// <div>Score: {state.score}</div>
// <div>TOP Score: {state.topScore}</div>
// </nav>
// <div className="rules">
// Get points by clicking on an image but do not click the same image twice.
// </div>
// <div className="heroes-container">
// {state.heroes.map((hero) => (
// <div key={hero.id} className="hero-card" onClick={() => handleClick(hero.name)}>
// <img src={hero.image} alt="heroimg" />
// <p>
// <span className="bold">Name:</span>
// {hero.name}
// </p>
// <p>
// <span className="bold">Occupation:</span>
// {hero.occupation}
// </p>
// </div>
// ))}
// </div>
// </div>
// );
// };

// export default App;











// The expression .sort((a, b) => (Math.random() > 0.5 ? -1 : 1)) is used to randomly shuffle the 
// elements of an array.

// The sort() method is a built-in JavaScript array method that allows you to sort the elements of an 
// array. By providing a comparison function as an argument to sort(), you can define the custom sorting 
// logic.

// In this case, the comparison function (a, b) => (Math.random() > 0.5 ? -1 : 1) is used. 

// Here's how it works:

// Math.random() generates a random number between 0 and 1.
// The comparison expression (Math.random() > 0.5 ? -1 : 1) evaluates to either -1 or 1 based 
// on the randomly generated number. If the random number is greater than 0.5, it returns -1; 
// otherwise, it returns 1.

// The sort() method uses this comparison function to determine the sorting order of elements in 
// the array. If the comparison function returns a negative value (-1), it means a should be placed 
// before b in the sorted array. If the comparison function returns a positive value (1), it 
// means b should be placed before a. If the comparison function returns 0, the order of 
// a and b remains unchanged.

// Since the comparison function uses a random number, it effectively shuffles the elements 
// randomly. Each time sort() is called, the elements will be rearranged in a different random order.

// By using this sorting technique, the code is shuffling the heroes array in the component's 
// state randomly each time the state is updated, resulting in a different order of displayed 
// heroes on each render.