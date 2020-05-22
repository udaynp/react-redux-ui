import React from 'react';
//  Provider makes the Redux store available to any nested
// components that have been wrapped in the connect
import { Provider } from 'react-redux';

import { appStore } from '../stores/appStore';
import { App } from './App';

export const AppContainer = () => {
  return (
    <Provider store={appStore}>
      <App />
    </Provider>
  );
};
