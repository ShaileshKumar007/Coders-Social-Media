import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import reducers from './reducers';
import { createStore, applyMiddleware, compose } from 'redux';
import { configureStore } from '@reduxjs/toolkit'

import App from './App'
import thunk from 'redux-thunk';

// const store = configureStore({ reducers });
const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
