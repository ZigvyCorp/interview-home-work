import { all, takeLatest } from "redux-saga/effects";
import { LOAD_COMMENTS, LOAD_POSTS } from "../actions/homeActions";
import { loadComments, loadPosts } from "./homeSaga";

const sagas = function* () {
  yield all([
    takeLatest(LOAD_POSTS, loadPosts),
    takeLatest(LOAD_COMMENTS, loadComments),
  ]);
};

export default sagas;
