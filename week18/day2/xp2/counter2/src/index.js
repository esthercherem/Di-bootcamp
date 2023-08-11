import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/reducer';
import App from './App';

const logAction = store => next => action => {
  return next(action);
};

const store = createStore(reducer, applyMiddleware(logAction));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);




// This file is the entry point of the application. It sets up the Redux store, 
// applies middleware for logging actions, and renders the main App component.

// logAction: This is a custom middleware function that logs the dispatched actions. 
// It takes store, next, and action as arguments. It logs the stringified version of 
// the action and then calls next(action) to continue the action dispatching process.

// store: This creates the Redux store using the createStore function from Redux. 
// It uses the reducer from the reducers module and applies the logAction middleware 
// using applyMiddleware.

// Provider: This component comes from the react-redux library and wraps the entire 
// application, providing access to the Redux store for all components within it.

// App: This is the root component of the application that will be rendered. 
// It's wrapped in the Provider component to enable access to the Redux store.












//PART 2
// REFACTOR TO FUNCTIONAL COMPONENT USING USE STATE AND EFFECT WITHOUT REDUX (no reducer)


// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );