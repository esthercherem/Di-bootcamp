import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import transactionReducer from './reducers/transactionReducer';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: transactionReducer,
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);