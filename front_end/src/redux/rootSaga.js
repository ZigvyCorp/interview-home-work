// src/redux/rootSaga.js
import { all } from 'redux-saga/effects';
import postSaga from './sagas/postSagas';


export default function* rootSaga() {
  yield all([
    postSaga(),
  ]);
}
