//actions/transactionActions.js

// The transactionActions.js file contains the action types and action creators for 
// the financial transactions app. Action types are constants that define the types 
// of actions that can occur in the application, and action creators are functions 
// that create and return action objects.

// Four action types are defined as constants:


// Action types

// INSERT: Represents the action of adding a new transaction.
export const INSERT = 'INSERT';

// UPDATE: Represents the action of updating an existing transaction.
export const UPDATE = 'UPDATE';

// DELETE: Represents the action of deleting a transaction.
export const DELETE = 'DELETE';

// UPDATE_INDEX: Represents the action of updating the index of the currently 
// selected transaction.
export const UPDATE_INDEX = 'UPDATE-INDEX';




// Action creators

// The insert action creator is a function that takes data as an argument 
// (the form data for a new transaction) and returns an action object. 
// The action object has two properties:

// type: It is set to the INSERT action type, indicating that this action is 
// for adding a new transaction.
// payload: It contains the data parameter, representing the form data of the 
// new transaction.

export const insert = (data) => ({
  type: INSERT,
  payload: data,
});



// The update action creator is similar to insert. It takes data as an argument 
// (the form data for an existing transaction to be updated) and returns an action 
// object. The action object has two properties:

// type: It is set to the UPDATE action type, indicating that this action is for 
// updating an existing transaction.
// payload: It contains the data parameter, representing the updated form data for 
// the transaction.

export const update = (data) => ({
  type: UPDATE,
  payload: data,
});



// The deleteTransaction action creator takes an id as an argument 
// (the unique identifier of the transaction to be deleted) and returns an action 
// object. The action object has two properties:

// type: It is set to the DELETE action type, indicating that this action is for 
// deleting a transaction.
// payload: It contains the id parameter, representing the unique identifier of 
// the transaction to be deleted.


export const deleteTransaction = (id) => ({
  type: DELETE,
  payload: id,
});




// The updateIndex action creator takes an index as an argument (the index of the 
// selected transaction) and returns an action object. The action object has two 
// properties:

// type: It is set to the UPDATE_INDEX action type, indicating that this action is for 
// updating the index of the currently selected transaction.
// payload: It contains the index parameter, representing the index of the selected 
// transaction.


export const updateIndex = (index) => ({
  type: UPDATE_INDEX,
  payload: index,
});




// These action creators are used in the components to dispatch actions to the Redux 
// store. When dispatched, these actions trigger the corresponding changes in the 
// state managed by the transactionReducer. For example, dispatching the insert 
// action will add a new transaction to the state, and dispatching the deleteTransaction 
// action will remove a transaction from the state. The payload property of each action 
// contains the necessary data to perform the action in the reducer.






// The transactionActions and transactionReducer work together to manage the state of 
// financial transactions in the Redux store. They facilitate communication between 
// the components and the store, allowing the components to dispatch actions and 
// update the store's state, which in turn triggers re-renders of the components 
// based on the updated state.

// Here's how they work together:

// Components:
// The components in the app, such as TransactionForm and TransactionList, are 
// connected to the Redux store using the connect() function from react-redux. 
// This connection is established through the mapStateToProps and mapDispatchToProps 
// functions.

// The components can dispatch actions using the action creators defined in 
// transactionActions.js, such as insert, update, deleteTransaction, and 
// updateIndex.

// Action Creators (transactionActions.js):
// The action creators are functions that return action objects. These action objects 
// represent the intention to perform a specific action in the app.

// Each action object includes a type property, which corresponds to the action type 
// (e.g., 'INSERT', 'UPDATE', 'DELETE', or 'UPDATE-INDEX'), and a payload property 
// containing relevant data needed to perform the action 
// (e.g., form data, transaction ID, or index).

// When an action creator is called (e.g., when insert(), update(), deleteTransaction(), 
// or updateIndex() is called), it returns an action object representing the specific 
// action that needs to be performed.

// Reducer (transactionReducer.js):
// The transactionReducer is a pure function that takes the current state and an 
// action as parameters and returns the new state.

// The reducer listens for actions dispatched by the components via the dispatch 
// function and processes these actions based on their type.

// Inside the switch statement in the reducer, each case corresponds to a specific 
// action type (INSERT, UPDATE, DELETE, or UPDATE-INDEX).

// For each action type, the reducer performs the necessary state updates based on 
// the payload of the action. For example, for the INSERT action, the reducer adds a 
// new transaction to the list in the state and updates the currentIndex. For the 
// DELETE action, it removes a transaction from the list. For the UPDATE-INDEX action, 
// it updates the currentIndex.

// After processing the action, the reducer returns a new state object with the 
// updated values. The state remains immutable, and the reducer creates a new state 
// object with the updated values rather than modifying the existing state directly.

// Redux Store:
// The Redux store is created using the configureStore function (from @reduxjs/toolkit) 
// and is initialized with the transactionReducer.

// The store holds the complete state of the app, which includes the currentIndex and 
// the array of transactions (list).

// Whenever an action is dispatched from a component, the store invokes the reducer 
// with the current state and the action, and the reducer processes the action to 
// generate a new state.

// The new state is then updated in the Redux store, and all components connected to 
// the store receive the updated state through their mapStateToProps function.

// Components Re-Renders:
// When the state in the Redux store is updated (i.e., after an action is processed by 
// the reducer and a new state is generated), the connected components will be 
// re-rendered.

// The mapStateToProps function in each connected component receives the updated state 
// as a prop, and any changes in the state are reflected in the component's view.

// For example, if a new transaction is added, the TransactionList component will 
// receive the updated list of transactions and re-render the table to display the 
// new transaction. Similarly, if the currentIndex is updated, the TransactionForm 
// component will receive the new currentIndex, allowing it to show the details of the 
// selected transaction in the form.

// By working together, the actions and the reducer enable the application to handle 
// user interactions, manage the state of transactions, and ensure that the components 
// are re-rendered whenever the state changes. This allows the app to display the latest 
// data and maintain a consistent user interface.