import { takeLatest, put } from "redux-saga/effects";
import {
  LOG_IN,
  SIGN_UP,
  CREATE_POST,
  GET_POSTS,
} from "../actions/actionTypes";
import { logInUser, signUpUser } from "./Api/authenticateUser";
import { createBlogPost, getBlogPosts } from "./Api/requestToBlog";

export function* rootSaga() {
  yield takeLatest(LOG_IN, logInUser);
  yield takeLatest(SIGN_UP, signUpUser);
  yield takeLatest(CREATE_POST, createBlogPost);
  yield takeLatest(GET_POSTS, getBlogPosts);
}
