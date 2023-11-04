import { all } from 'redux-saga/effects';
import watchFetchPosts from "./posts/postsSaga";
import watchFetchUsers from './users/usersSaga';
import watchFetchComments from './comments/commentsSaga';

export default function* rootSaga() {
  yield all([
    watchFetchPosts(),
    watchFetchUsers(),
    watchFetchComments()
  ]);
}
