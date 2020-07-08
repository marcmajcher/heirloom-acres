import React from 'react';
import ReactDOM from 'react-dom';
import 'react-skeleton-css/styles/skeleton.2.0.4.css';
import './index.css';
import App from './components/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
