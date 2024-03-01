import { all } from "redux-saga/effects";
import { watchFetchPosts, watchSearchPosts, watchFetchPost } from "./postSagas";
import { watchFetchCommentsByPost } from "./commentSagas";

export default function* rootSaga() {
  yield all([watchFetchPosts(), watchSearchPosts(), watchFetchPost(), watchFetchCommentsByPost()]);
}
