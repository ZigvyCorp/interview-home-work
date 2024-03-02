import { all, takeLatest } from "redux-saga/effects";
import { LOAD_COMMENTS, LOAD_POSTS, LOAD_USER } from "../actions/homeActions";
import { loadComments, loadPosts, loadUser } from "./homeSaga";

const sagas = function* () {
  yield all([
    takeLatest(LOAD_POSTS, loadPosts),
    takeLatest(LOAD_COMMENTS, loadComments),
    takeLatest(LOAD_USER, loadUser),
  ]);
};

export default sagas;
