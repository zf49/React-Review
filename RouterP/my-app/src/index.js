import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './07-antd/06-轮播';
import 'antd/dist/antd.min.css';


// import { Provider } from 'react-redux'
// import {store,persistor} from './06-react-redux/redux/store'

// import { PersistGate } from 'redux-persist/integration/react'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // redux 使用
  // <React.StrictMode>
  // <Provider store={store}>
  //   <PersistGate loading={null} persistor={persistor}>
  //     <App />
  //   </PersistGate>

  // </Provider>


<App />

  // </React.StrictMode>
);

