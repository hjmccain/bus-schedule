import React from 'react';
import ReactDOM from 'react-dom';
import DisplayPage from './components/DisplayPage';
import { Provider } from 'react-redux';
import { store } from './store';

ReactDOM.render(
  <Provider store={store}><DisplayPage /></Provider>,
  document.getElementById('root')
);
