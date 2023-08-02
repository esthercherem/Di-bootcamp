// src/reducers/index.js

import { combineReducers } from 'redux';

const moviesReducer = () => {
  return [
    { title: 'Spider-Man: Homecoming', releaseDate: '05-07-2017', rating: 7.4 },
    { title: 'Aquaman', releaseDate: '12-07-2018', rating: 7 },
    { title: 'Black Panther', releaseDate: '02-13-2018', rating: 7.4 },
    { title: 'Avengers: Infinity War', releaseDate: '04-25-2018', rating: 8.3 },
    { title: 'Guardians of the Galaxy', releaseDate: '07-30-2014', rating: 7.9 },
  ];
};

const selectedMovieReducer = (selectedMovie = null, action) => {
  if (action.type === 'MOVIE_SELECTED') {
    return action.payload;
  }

  return selectedMovie;
};

export default combineReducers({
  movies: moviesReducer,
  selectedMovie: selectedMovieReducer,
});




// The selectedMovieReducer is a pure function that handles the state updates for 
// the selectedMovie property in the Redux store. It follows the standard reducer 
// pattern in Redux. Here's a detailed explanation of how it works:

// Parameters:

// selectedMovie: This parameter represents the current state for the selectedMovie 
// property in the Redux store. The reducer provides a default value of null for 
// selectedMovie in case it is not defined yet when the reducer is first called.

// action: This parameter represents the action dispatched to the reducer. An 
// action is a plain JavaScript object with a type property (a string that describes 
// the action) and an optional payload property (data associated with the action).

// Reducer Logic:

// The selectedMovieReducer checks if the action.type is equal to 'MOVIE_SELECTED'. 
// This condition is used to determine if the action is of the type that should 
// update the selectedMovie state.

// If the action.type matches 'MOVIE_SELECTED', it means that the user has selected 
// a movie, and the reducer should update the selectedMovie state accordingly. 
// The reducer then returns the action.payload, which is the movie object passed as 
// data when the 'MOVIE_SELECTED' action was dispatched. In this case, the 
// selectedMovie state will be set to the selected movie object.

// If the action.type does not match 'MOVIE_SELECTED', it means that the action is 
// not relevant to this reducer, and it should not change the selectedMovie state. 
// In this case, the reducer simply returns the current selectedMovie state 
// without making any changes.

// Immutability:
// It is important to note that the reducer should always return a new state 
// object (or the same state object if no changes are made) and should not 
// directly modify the existing state. This principle ensures immutability in 
// Redux, making it easier to track state changes and maintain a predictable 
// state tree.

// In summary, the selectedMovieReducer handles state updates for the selectedMovie 
// property in the Redux store. It checks the action type and returns the appropriate 
// state based on the action's payload. If the action type is 'MOVIE_SELECTED', 
// it sets the selectedMovie state to the selected movie object; otherwise, it 
// returns the current state without changes. By following these rules, the 
// reducer ensures that the application's state remains consistent and predictable 
// throughout the Redux data flow.