import { all } from 'redux-saga/effects';
import { watchFetchPosts } from './sagas/postSaga';
import { watchFetchUsers } from './sagas/userSaga';
import { watchFetchComments } from './sagas/commentSaga';

export default function* rootSaga() {
  yield all([
    watchFetchPosts(),
    watchFetchUsers(),
    watchFetchComments(),
  ]);
}
