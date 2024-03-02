import { all, takeLatest } from "redux-saga/effects";
import { LOAD_COMMENTS, LOAD_POSTS, LOAD_USER } from "../actions/homeActions";
import { loadComments, loadPosts, loadUsers } from "./homeSaga";

const sagas = function* () {
  yield all([
    takeLatest(LOAD_POSTS, loadPosts),
    takeLatest(LOAD_COMMENTS, loadComments),
    takeLatest(LOAD_USER, loadUsers),
  ]);
};

export default sagas;
