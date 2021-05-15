import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './redux/reducers/index';
import postSaga from './redux/sagas/postSaga';
import userSaga from './redux/sagas/userSaga';
import commentSaga from './redux/sagas/commentSaga';
const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers,applyMiddleware(sagaMiddleware));

sagaMiddleware.run(postSaga);
sagaMiddleware.run(userSaga);
sagaMiddleware.run(commentSaga);


ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);
