import { takeLatest, takeEvery, all } from 'redux-saga/effects';
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

function* watchGetPosts() {
  yield takeLatest(GET_POSTS, handleGetPosts);
}

function* watchGetUsers() {
  yield takeLatest(GET_USERS, handleGetUsers);
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