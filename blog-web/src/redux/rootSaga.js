// src/redux/rootSaga.js
import { all } from 'redux-saga/effects';
import postSaga from './sagas/postSagas';
import commentSaga from './sagas/commentSagas';

export default function* rootSaga() {
  yield all([
    postSaga(),
    commentSaga(),
  ]);
}
