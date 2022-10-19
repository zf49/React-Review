import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './07-antd/01-antd引入';

import { Provider } from 'react-redux'
import {store,persistor} from './06-react-redux/redux/store'




import { PersistGate } from 'redux-persist/integration/react'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>

  </Provider>
  // </React.StrictMode>
);

