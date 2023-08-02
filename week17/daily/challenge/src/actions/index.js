// src/actions/index.js

export const selectMovie = (movie) => {
    return {
      type: 'MOVIE_SELECTED',
      payload: movie,
    };
  };
  





//   Action Creator:
// An action creator is a function that creates and returns an action object. 
// In Redux, actions are plain JavaScript objects that describe what happened in the 
// application. They contain information about the action type and optional data, 
// commonly known as the payload.

// selectMovie Action Creator:
// The selectMovie action creator is a function that takes a movie object as its 
// argument. This movie object represents the movie that the user wants to select.

// Action Object:
// Inside the selectMovie action creator, a JavaScript object is created and returned. 
// This object is known as the action object. It consists of two properties:

// type: The type property is a string that describes the type of action being performed. 
// In this case, the type is 'MOVIE_SELECTED', indicating that a movie has been selected. 
// The type is used by Redux reducers to determine how to update the state in response 
// to this action.

// payload: The payload property carries the data associated with the action. 
// It contains the movie object that was passed as an argument to the action creator. 
// The payload typically contains any relevant information needed to perform updates 
// in the Redux store.

// Action Dispatch:
// Once the selectMovie action creator is called, it returns an action object with the 
// type 'MOVIE_SELECTED' and the provided movie object as the payload. This action 
// object is then dispatched to the Redux store using Redux's built-in dispatch 
// function.

// For example, in the MovieList component, when the "Select" button is clicked, 
// the selectMovie action creator is called with the selected movie object, and the 
// action object is dispatched to the Redux store. The reducer, specifically the 
// selectedMovieReducer, will receive this action and update the selectedMovie state 
// in the Redux store accordingly.

// By dispatching actions, the selectMovie action creator plays a crucial role in 
// enabling components to communicate with the Redux store, update the application's 
// state, and trigger appropriate state changes throughout the application.