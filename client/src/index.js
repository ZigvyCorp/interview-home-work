import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { Provider } from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import createSageMiddleware from 'redux-saga';
import reducers from './redux/reducers';
import mySaga from './redux/sagas';
const sagaMiddleware = createSageMiddleware();

const store = createStore(reducers , applyMiddleware(sagaMiddleware));

sagaMiddleware.run(mySaga);

ReactDOM.render(
  <Provider store={store}> 
    <App />
  </Provider>,
  document.getElementById('root')
);

