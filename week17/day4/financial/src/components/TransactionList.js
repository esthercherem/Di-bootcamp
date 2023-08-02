//components/TransactionList.js

// The component imports necessary dependencies. It imports React from 'react' 
// for building the component, connect from 'react-redux' to connect the component 
// to the Redux store, and the action creators updateIndex and deleteTransaction 
// from '../actions/transactionActions'.


import React from 'react';
import { connect } from 'react-redux';
import { updateIndex, deleteTransaction } from '../actions/transactionActions';




// The TransactionList component is a functional component that renders a table 
// displaying the list of financial transactions. The component receives three props 
// (list, updateIndex, and deleteTransaction) from the Redux store due to the connect() 
// function.

// The handleEdit function is called when the "Edit" button is clicked. It 
// takes the index of the transaction as an argument and calls the updateIndex 
// action creator, which dispatches the UPDATE_INDEX action to the Redux store. 
// This action updates the currentIndex property in the store to the selected index, 
// allowing the transaction to be edited in the TransactionForm component.

// The handleDelete function is called when the "Delete" button is clicked. It takes 
// the id of the transaction as an argument and calls the deleteTransaction action 
// creator, which dispatches the DELETE action to the Redux store. This action 
// removes the transaction with the specified id from the list in the store, 
// updating the state accordingly.

// The component uses list.map() to render each transaction as a table row (<tr>). 
// It displays the transaction details in the table cells (<td>) 
// such as account number, FSC, name, and amount. For each transaction, 
// there are two buttons: "Edit" and "Delete".



const TransactionList = ({ list, updateIndex, deleteTransaction }) => {
  const handleEdit = (index) => {
    updateIndex(index);
  };

  const handleDelete = (id) => {
    deleteTransaction(id);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Account Number</th>
            <th>FSC</th>
            <th>Name</th>
            <th>Amount</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item, index) => (
            <tr key={item.id}>
              <td>{item.accountNumber}</td>
              <td>{item.FSC}</td>
              <td>{item.name}</td>
              <td>{item.amount}</td>
              <td>
                <button onClick={() => handleEdit(index)}>Edit</button>
              </td>
              <td>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};




// mapStateToProps: It maps the list from the Redux store's state to the list prop 
// of the TransactionList component. This allows the component to access the list 
// of transactions from the store as a prop.


const mapStateToProps = (state) => ({
  list: state.list,
});


// mapDispatchToProps: It maps the updateIndex and deleteTransaction action creators 
// to the corresponding props of the TransactionList component. This allows the 
// component to call these actions to update the Redux store when needed.

const mapDispatchToProps = {
  updateIndex,
  deleteTransaction,
};


// The connect() function is used to connect the TransactionList component to the 
// Redux store. It maps the state data and action creators to the component's props.

// Finally, the connected TransactionList component is exported, and it will receive 
// updates from the Redux store whenever the state changes due to dispatched actions. 
// This ensures that the component's view is updated in response to changes in the 
// transaction data, allowing for a dynamic and responsive user interface.

export default connect(mapStateToProps, mapDispatchToProps)(TransactionList);