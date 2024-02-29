import { all } from 'redux-saga/effects';
import { watchFetchComments, watchFetchCommentsByPostId, watchFetchPost, watchFetchPosts, watchFetchPostsByKeyword } from './postSaga';
import { watchFetchUsers, watchFetchUserById } from './userSaga';
// import { watchFetchComments } from './commentSaga';

export default function* rootSaga() {
  yield all([watchFetchPosts(), watchFetchPost(), watchFetchComments(), watchFetchUsers(), watchFetchCommentsByPostId(), watchFetchUserById(), watchFetchPostsByKeyword()]);
}
