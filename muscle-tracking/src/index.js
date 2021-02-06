import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import AppContainer from './containers/AppContainer';
import Reducer from './reducers/index.js';

//Store
const store = createStore(Reducer);

ReactDOM.render(
 <Provider store={store}>
   <AppContainer />
 </Provider>,
  document.getElementById('root')
);