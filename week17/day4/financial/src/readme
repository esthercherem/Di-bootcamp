npx create-react-app redux-financial-transactions-app
cd redux-financial-transactions-app

Install Redux and React Redux
Install the required Redux and React Redux libraries:

npm install redux react-redux --save

createStore is deprecated so redux-toolkit is needed in order to update index
to configureStore.

npm install @reduxjs/toolkit --save








Components
The app consists of two main components:

TransactionForm: This component is responsible for rendering a form with four inputs (account number, FSC, name, and amount) and a submit button. It uses local state (formData) to manage the form data. When the form is submitted, it dispatches an action (insert or update) to add a new transaction or update an existing one in the Redux store. It is connected to the Redux store using connect() from react-redux.

TransactionList: This component renders a table with the list of transactions fetched from the Redux store. It displays the account number, FSC, name, and amount for each transaction in the table rows. It also provides buttons to edit or delete each transaction. When the edit or delete buttons are clicked, the corresponding action (updateIndex or deleteTransaction) is dispatched to the Redux store. It is also connected to the Redux store using connect() from react-redux.

Actions
The actions are defined in the transactionActions.js file. There are four action types:
INSERT: This action is dispatched when the form is submitted to add a new transaction to the store.
UPDATE: This action is dispatched when the form is submitted to update an existing transaction in the store.
DELETE: This action is dispatched when the delete button is clicked to remove a transaction from the store.
UPDATE_INDEX: This action is dispatched when the edit button is clicked to update the currentIndex in the store.

Reducers
The reducers are defined in the transactionReducer.js file. The reducer function handles the state changes based on the dispatched actions. It uses a switch case to determine the action type and updates the state accordingly. For example, when the INSERT action is dispatched, the reducer adds the new transaction to the list in the state. Similarly, when the UPDATE action is dispatched, the reducer updates the existing transaction with the new data.

Store
The Redux store is created using the configureStore function from @reduxjs/toolkit. It takes the transactionReducer as an argument to manage the state changes. The initial state of the store includes currentIndex set to -1 (indicating no current transaction) and the list of transactions fetched from the localStorage.

localStorage
The app uses localStorage to persist the transaction data in the browser. When a new transaction is added or an existing transaction is updated or deleted, the data is stored in localStorage to ensure that it is retained even after the page is refreshed.

Provider
The app wraps the App component with the Provider component from react-redux, which allows all components in the app to access the Redux store and receive updates when the state changes.

Overall Flow of the App:

When the app starts, it fetches the transactions data from localStorage and initializes the Redux store with this data.
The App component renders the TransactionForm and TransactionList components.
The TransactionForm component allows users to add new transactions or update existing ones. When the form is submitted, it dispatches the corresponding action (insert or update) to the Redux store, which updates the state with the new transaction data.
The TransactionList component displays the list of transactions fetched from the Redux store in a table. It provides buttons to edit or delete each transaction. When these buttons are clicked, the corresponding actions (updateIndex or deleteTransaction) are dispatched to the Redux store, which updates the state accordingly.
All changes in the Redux store are automatically propagated to the connected components (TransactionForm and TransactionList), and they update their views accordingly.
That's the overall working of the entire app. Users can add, edit, and delete transactions, and the data is persistently stored in localStorage. The app uses Redux to manage the state and react-redux to connect the components to the Redux store.