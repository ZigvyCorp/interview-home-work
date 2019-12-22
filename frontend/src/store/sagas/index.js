import { takeEvery } from "redux-saga/effects";

import * as actionTypes from "../actions/actionTypes";

import { initFetchPosts, fetchPosts } from "./blogs";
import { checkMe, signUp, login, logout } from "./authen";
import { createNewPost } from "./createNewPost";

export function* watchBlogs() {
  yield takeEvery(actionTypes.INIT_FETCH_POSTS, initFetchPosts);
  yield takeEvery(actionTypes.FETCH_POSTS, fetchPosts);
}

export function* watchAuthen() {
  yield takeEvery(actionTypes.CHECK_ME, checkMe);
  yield takeEvery(actionTypes.SIGNUP, signUp);
  yield takeEvery(actionTypes.LOGIN, login);
  yield takeEvery(actionTypes.LOGOUT, logout);
}

export function* watchCreateNewPost() {
  yield takeEvery(actionTypes.CREATE_NEW_POST, createNewPost)
}