import { takeLatest, takeEvery, all } from 'redux-saga/effects';
import {
  COMMENTS_BY_POST_ID_FETCH_REQUEST,
  COMMENTS_FETCH_REQUEST,
} from '../constants/commentConstants';
import { POSTS_FETCH_REQUEST } from '../constants/postConstants';
import {
  USERS_FETCH_REQUEST,
  USER_FETCH_REQUEST,
} from '../constants/userConstants';
import { handleGetPosts } from './handlers/post';
import { handleGetUserById, handleGetUsers } from './handlers/user';
import {
  handleGetComments,
  handleGetCommentsByPostId,
} from './handlers/comment';

function* watchGetPosts() {
  yield takeLatest(POSTS_FETCH_REQUEST, handleGetPosts);
}

function* watchGetUsers() {
  yield takeLatest(USERS_FETCH_REQUEST, handleGetUsers);
}

function* watchGetComments() {
  yield takeLatest(COMMENTS_FETCH_REQUEST, handleGetComments);
}

function* watchGetSingleUser() {
  yield takeEvery(USER_FETCH_REQUEST, handleGetUserById);
}

function* watchCommentsByPostId() {
  yield takeEvery(COMMENTS_BY_POST_ID_FETCH_REQUEST, handleGetCommentsByPostId);
}

export function* watcherSaga() {
  yield all([
    watchGetPosts(),
    watchGetUsers(),
    watchGetComments(),
    watchGetSingleUser(),
    watchCommentsByPostId(),
  ]);
}
