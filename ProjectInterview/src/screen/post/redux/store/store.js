import {createStore , applyMiddleware,  } from 'redux';

import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducer';

import { composeWithDevTools } from 'redux-devtools-extension';
import rootSaga from '../saga/indexSaga';
const sagaMiddleware = createSagaMiddleware();
export const Store  = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga);