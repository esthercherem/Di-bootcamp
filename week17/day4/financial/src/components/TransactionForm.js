//components/TransactionForm.js

import React, { useState } from 'react';
import { connect } from 'react-redux';
import { insert, update } from '../actions/transactionActions';


// Local State and Form Input Handling:
// The component uses useState hook to create a local state formData to 
// manage the data of the form inputs.



const TransactionForm = ({ currentIndex, list, insert, update }) => {
  const [formData, setFormData] = useState({
    accountNumber: '',
    FSC: '',
    name: '',
    amount: '',
  });



// The handleInputChange function is used as an event handler for the form 
// input changes. It is called whenever there is a change in any of the form 
// inputs. The function extracts the name and value properties from the input 
// element, and it updates the local state formData using the spread operator to 
// merge the new value for the corresponding input field.

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };



// Form Submission Handling:
// The handleSubmit function is used as an event handler for the form submission. 
// It is called when the form is submitted.

// The function checks the value of currentIndex to determine if it is -1 or not. 
// If currentIndex is -1, it means that the form is being used to add a new 
// transaction.

// If currentIndex is -1, the function dispatches the insert action by calling 
// the insert action creator with the form data in formData. The insert action 
// is responsible for adding a new transaction to the Redux store.

// If currentIndex is not -1, it means that the form is being used to update an 
// existing transaction.

// If so, the function dispatches the update action by calling the update action 
// creator with the updated form data (formData) along with the id of the transaction 
// to be updated. The update action is responsible for updating the existing 
// transaction in the Redux store.

// After dispatching the action, the function clears the form fields by resetting 
// the formData state to its initial values.

  const handleSubmit = (event) => {
    event.preventDefault();
    if (currentIndex === -1) {
      insert(formData);
    } else {
      update({ ...formData, id: list[currentIndex].id });
    }
    setFormData({
      accountNumber: '',
      FSC: '',
      name: '',
      amount: '',
    });
  };



//   JSX Markup:
//   The component renders a form element with input fields for 
//   accountNumber, FSC, name, and amount. Each input field is associated 
//   with the corresponding property in the formData state.
  
//   The value of each input field is set to the corresponding value from the 
//   formData state, which allows the form fields to be controlled components.
  
//   The handleInputChange function is used as the onChange event handler


  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="accountNumber"
        value={formData.accountNumber}
        onChange={handleInputChange}
        placeholder="Account Number"
      />
      <input
        type="text"
        name="FSC"
        value={formData.FSC}
        onChange={handleInputChange}
        placeholder="FSC"
      />
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        placeholder="Name"
      />
      <input
        type="text"
        name="amount"
        value={formData.amount}
        onChange={handleInputChange}
        placeholder="Amount"
      />
      <button type="submit">Submit</button>
    </form>
  );
};


// The mapStateToProps function is used to map the Redux state to the component's props. 
// It takes the entire Redux state as an argument and returns an object with the 
// properties that the component needs to access from the state.

// state.list: This property maps the list from the Redux store's state to the 
// list prop of the TransactionForm component. It allows the component to access 
// the array of transactions from the store.

// state.currentIndex: This property maps the currentIndex from the Redux store's 
// state to the currentIndex prop of the TransactionForm component. It allows the 
// component to access the index of the currently selected transaction for editing 
// purposes.

const mapStateToProps = (state) => ({
  list: state.list,
  currentIndex: state.currentIndex,
});


// The mapDispatchToProps variable is an object that maps action creators to the 
// component's props. It simplifies the process of dispatching actions from the 
// component without explicitly using dispatch().

// insert: This maps the insert action creator from transactionActions.js to the insert 
// prop of the TransactionForm component. It allows the component to call the insert 
// action creator to add a new transaction to the Redux store.

// update: This maps the update action creator from transactionActions.js to the update 
// prop of the TransactionForm component. It allows the component to call the update 
// action creator to update an existing transaction in the Redux store.

const mapDispatchToProps = {
  insert,
  update,
};




export default connect(mapStateToProps, mapDispatchToProps)(TransactionForm);


// The connect() function is from react-redux and is used to connect the 
// TransactionForm component to the Redux store. It takes two arguments: 
// mapStateToProps and mapDispatchToProps.

// mapStateToProps: This argument is optional, but since it is provided, it allows 
// the component to access specific parts of the Redux state as props.

// mapDispatchToProps: This argument is optional, but since it is provided, it 
// allows the component to access the action creators as props, simplifying the 
// process of dispatching actions.

// TransactionForm: The TransactionForm component is passed as an argument to the 
// connect() function. This creates a new connected component that has access to 
// the Redux state and the action creators through its props.

// Finally, the connected TransactionForm component is exported, and it can interact 
// with the Redux store and dispatch actions to manage the state of transactions 
// efficiently. It can access the list of transactions and the currentIndex for 
// editing purposes, and it can call the insert and update action creators to 
// update the state of transactions in the Redux store.