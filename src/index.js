import React from 'react';
import ReactDOM from 'react-dom';
import FullPage from './components/FullPage';
import { Provider } from 'react-redux';
import { store } from './store';

ReactDOM.render(
  <Provider store={store}><FullPage /></Provider>,
  document.getElementById('root')
);
