import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './06-react-redux/App';

import { Provider } from 'react-redux'
import store from './06-react-redux/redux/store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Provider store={store}>

        <App />

  </Provider>
  // </React.StrictMode>
);

