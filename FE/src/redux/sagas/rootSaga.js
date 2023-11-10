import { all } from 'redux-saga/effects';
import { watchFetchPosts } from './postSaga.js';
import { watchFetchComments } from './commentSaga.js';

export function* rootSaga() {
  yield all([watchFetchPosts(), watchFetchComments()]);
}
