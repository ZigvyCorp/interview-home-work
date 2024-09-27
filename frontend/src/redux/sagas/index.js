/**
 * Root saga that combines all individual sagas into a single entry point for the saga middleware.
 * 
 * @module rootSaga
 * @requires redux-saga/effects
 * @requires ./postSaga
 */
import { all } from 'redux-saga/effects';
import postSaga from './postSaga';

export default function* rootSaga() {
  yield all([
    postSaga(),
  ]);
}