import { takeLatest, takeEvery } from 'redux-saga/effects';
import {
  COMMENTS_BY_POST_ID_FETCH_REQUEST,
  COMMENTS_FETCH_REQUEST,
} from '../constants/commentConstants';
import { GET_POSTS } from '../constants/postConstants';
import { GET_USERS, USER_FETCH_REQUEST } from '../constants/userConstants';
import { handleGetPosts } from './handlers/post';
import { handleGetUserById, handleGetUsers } from './handlers/user';
import {
  handleGetComments,
  handleGetCommentsByPostId,
} from './handlers/comment';

export function* watcherSaga() {
  yield takeLatest(GET_POSTS, handleGetPosts);
  yield takeLatest(GET_USERS, handleGetUsers);
  yield takeLatest(COMMENTS_FETCH_REQUEST, handleGetComments);
  yield takeEvery(USER_FETCH_REQUEST, handleGetUserById);
  yield takeEvery(COMMENTS_BY_POST_ID_FETCH_REQUEST, handleGetCommentsByPostId);
}
