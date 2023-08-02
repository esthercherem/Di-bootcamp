// src/components/MovieDetails.js

import React from 'react';
import { connect } from 'react-redux';

const MovieDetails = ({ selectedMovie }) => {
  if (!selectedMovie) {
    return <div>Select a movie</div>;
  }

  return (
    <div>
      <h2>{selectedMovie.title}</h2>
      <p>Release Date: {selectedMovie.releaseDate}</p>
      <p>Rating: {selectedMovie.rating}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { selectedMovie: state.selectedMovie };
};

export default connect(mapStateToProps)(MovieDetails);






// Function Component:
// The MovieDetails component is a functional component in React. It receives the 
// selectedMovie prop from the Redux store, which represents the currently selected 
// movie. The component will display movie details if a movie is selected, or it will 
// show a message to "Select a movie" if no movie is selected.

// connect Function:
// The connect function is imported from react-redux. It connects the MovieDetails 
// component to the Redux store, allowing it to access the state from the store and 
// receive updates when the state changes.

// Conditional Rendering:
// The component uses a simple conditional rendering approach to check if selectedMovie 
// is truthy or falsy. If selectedMovie is falsy (i.e., no movie is selected), it returns 
// a <div> element with the text "Select a movie." Otherwise, it displays the movie 
// details by rendering an element with the movie's title, release date, and rating.

// mapStateToProps Function:
// The mapStateToProps function is used in conjunction with the connect function to 
// specify which parts of the Redux store state should be mapped to the component's 
// props. In this case, selectedMovie is mapped to the component's prop, allowing the 
// MovieDetails component to access the selectedMovie from the store.

// Export:
// The MovieDetails component is exported after connecting it to the Redux store using 
// the connect function. By exporting the connected component, it becomes aware of any 
// changes in the Redux store state related to selectedMovie and will re-render when 
// necessary.

// Overall, the MovieDetails component is a simple functional component that receives 
// the selectedMovie from the Redux store and displays the movie details or a message 
// to "Select a movie" based on whether a movie is currently selected. It is connected 
// to the Redux store using the connect function, which allows it to access the state 
// from the store and receive updates when the state changes.