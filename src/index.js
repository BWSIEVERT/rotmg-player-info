import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Router Imports
import { BrowserRouter as Router } from 'react-router-dom'

// Redux Imports
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import Reducer from './store/reducers'

// Creating Redux Store
const store = createStore(Reducer, applyMiddleware(thunk, logger))

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
