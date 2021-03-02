import { takeLatest } from 'redux-saga/effects';
import { GET_POSTS } from '../constants/postConstants';
import { handleGetPosts } from './handlers/post';

export function* watcherSaga() {
  yield takeLatest(GET_POSTS, handleGetPosts);
}
