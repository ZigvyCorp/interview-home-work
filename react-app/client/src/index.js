import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceworker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//React-Redux
import store from './store'
import {Provider} from 'react-redux'
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />

    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.register();