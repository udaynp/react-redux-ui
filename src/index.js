import React from 'react';
import ReactDOM from 'react-dom';

// BrowserRouter uses regular URL paths
import { BrowserRouter as Router } from 'react-router-dom';

import { AppContainer } from './components/AppContainer';

import './index.css';
//querySelector is to return matching selector
ReactDOM.render(
  <Router>
    <AppContainer />
  </Router>,
  document.querySelector('#root')
);
