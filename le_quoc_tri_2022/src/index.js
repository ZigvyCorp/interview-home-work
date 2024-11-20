import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './pages/HomePage/HomePage';
import './assets/scss/style.scss'
import { Provider } from 'react-redux';
import { store } from "./redux/configStore";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <HomePage/>
  </Provider>
);

