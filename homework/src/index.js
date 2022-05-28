import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'popper.js/dist/esm/popper.min.js';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
// import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import rootReducer from './redux/reducer/root-reducer';

// const sagaMiddleware = createSagaMiddleware();

const root = ReactDOM.createRoot(document.getElementById('root'));

// const store = createStore(
//   rootReducer,
//   applyMiddleware(sagaMiddleware)
// );


const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
