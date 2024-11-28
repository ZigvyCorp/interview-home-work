import { all } from 'redux-saga/effects';
import { watchFetchPosts } from './posts/postsSaga';
import { watchFetchComments } from './comments/commentsSaga';

export default function* rootSaga() {
  yield all([
    watchFetchPosts(),
    watchFetchComments(),
  ]);
}
