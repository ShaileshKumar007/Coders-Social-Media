import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, componse } from 'redux';
import thunk from 'redux-thunk';

import App from './App'

const store = createStore()

ReactDOM.render(<App/>, document.getElementById('root'));
