import { takeLatest } from 'redux-saga/effects';
import { GET_POSTS } from '../constants/postConstants';
import { GET_USERS } from '../constants/userConstants';
import { handleGetPosts } from './handlers/post';
import { handleGetUsers } from './handlers/user';

export function* watcherSaga() {
  yield takeLatest(GET_POSTS, handleGetPosts);

  yield takeLatest(GET_USERS, handleGetUsers);
}
