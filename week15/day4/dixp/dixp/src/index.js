import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals




// React lifecycle methods:

// constructor(): The constructor() method is the first method that is called when a component is created. It is used for initializing state and binding event handlers. 

// The constructor() method takes props as an argument and should always start with a call to super(props) to ensure that the component's parent class constructor is executed properly. Inside the constructor, you can set the initial state by assigning an object to this.state.

// getDerivedStateFromProps(): The getDerivedStateFromProps() method is a static method that is called right before rendering and is invoked on every render. It takes the updated props and the current state as arguments and should return an object to update the state, or null if no state update is necessary. This method is rarely used but can be helpful in rare cases when the state needs to be updated based on changes in props.

// render(): The render() method is a required method in a React component. It is responsible for returning the JSX that defines the component's structure and content. 

// The render() method is invoked whenever there is a change in the component's state or props. It should be a pure function, meaning it should not modify the component's state or interact with the browser's DOM directly.

// componentDidMount(): The componentDidMount() method is called immediately after the component is mounted (i.e., inserted into the DOM). It is commonly used to perform side effects, such as data fetching, subscriptions, or modifying the DOM. This method is a good place to initialize any necessary resources for the component. It is only called once in the component's lifecycle.
// Here's the order in which these lifecycle methods are called during the component's lifecycle:

// constructor()
// getDerivedStateFromProps()
// render()
// componentDidMount()


// Note: In React's latest versions, hooks have been introduced, which provide a more flexible way to manage component lifecycles and state. If you're starting a new project or working with a more recent version of React, you might consider using hooks instead of relying solely on lifecycle methods.