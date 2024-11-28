import { all } from 'redux-saga/effects';
import { watchFetchData } from './postSaga/postSaga.js';

export default function* rootSaga() {
  yield all([
    watchFetchData(),
  ]);
}