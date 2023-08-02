//reducers/transactionReducer.js

// In this line, the action types (INSERT, UPDATE, DELETE, and UPDATE_INDEX) 
// are imported from the transactionActions.js file. These action types will be used in 
// the switch case to determine the action to be performed.

import { INSERT, UPDATE, DELETE, UPDATE_INDEX } from '../actions/transactionActions';



// The initialState object represents the initial state of the Redux store for 
// the transaction-related data. It consists of two properties:

// currentIndex: This property holds the index of the currently selected transaction 
// in the list array. The initial value is set to -1, indicating that no transaction 
// is currently selected.
// list: This property contains an array of transactions fetched from the localStorage 
// or an empty array if no transactions are available in the localStorage.

const initialState = {
  currentIndex: -1,
  list: JSON.parse(localStorage.getItem('transactions')) || [],
};



// The transactionReducer function is a pure function that takes the current state 
// and an action as parameters and returns the new state after processing the action. 
// It uses a switch case to determine which action is dispatched and handles the state 
// updates accordingly.

const transactionReducer = (state = initialState, action) => {
  switch (action.type) {


// Handling Different Actions
// The reducer contains different cases for handling different actions:

// When the INSERT action is dispatched, a new transaction is added to the list 
// array in the state. The new transaction is created by spreading the action.payload 
// (which contains the form data) and adding a unique id generated using Date.now(). 
// Then, the list is updated with the new transaction, and the state is updated with 
// the new list. Additionally, the currentIndex is set to -1 to indicate that no 
// transaction is currently selected. The updated list is also stored in the 
// localStorage for data persistence.

    case INSERT:
      const newItem = { ...action.payload, id: Date.now() };
      const newList = [...state.list, newItem];
      localStorage.setItem('transactions', JSON.stringify(newList));
      return { ...state, list: newList, currentIndex: -1 };



//   When the UPDATE action is dispatched, an existing transaction in the list 
//   array is updated with the new form data. The updated transaction is identified 
//   in the list using its id, and the properties are updated with the values from 
//   action.payload. The list is then updated with the updated transaction, and 
//   the currentIndex is set to -1 to indicate that no transaction is currently 
//   selected. The updated list is also stored in the localStorage for data 
//   persistence.      

    case UPDATE:
      const updatedList = state.list.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
      localStorage.setItem('transactions', JSON.stringify(updatedList));
      return { ...state, list: updatedList, currentIndex: -1 };




//   When the DELETE action is dispatched, an existing transaction is removed 
//   from the list array based on its id. The filteredList is obtained by filtering 
//   out the transaction with the specified id. The list is then updated with the 
//   filtered list, and the currentIndex is set to -1 to indicate that no transaction 
//   is currently selected. The updated list is also stored in the localStorage for 
//   data persistence.

    case DELETE:
      const filteredList = state.list.filter((item) => item.id !== action.payload);
      localStorage.setItem('transactions', JSON.stringify(filteredList));
      return { ...state, list: filteredList, currentIndex: -1 };




//   When the UPDATE_INDEX action is dispatched, the currentIndex property in the 
//   state is updated with the value from action.payload. This action is used to 
//   select a specific transaction for editing. The currentIndex represents the 
//   index of the selected transaction in the list.


    case UPDATE_INDEX:
      return { ...state, currentIndex: action.payload };


//   If none of the above cases matches the dispatched action type, the reducer 
//   returns the current state without any changes.

    default:
      return state;
  }
};



// transactionReducer function is exported as the default export from this file so 
// that it can be imported in other parts of the application, such as in the index.js 
// file where the Redux store is created.

export default transactionReducer;



// TransactionReducer.js handles different actions 
// (INSERT, UPDATE, DELETE, and UPDATE_INDEX) to manage the state of the transactions 
// in the Redux store and ensure data persistence using localStorage.