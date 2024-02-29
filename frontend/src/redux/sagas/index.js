import { all } from "redux-saga/effects";
import { watchGetAllPosts } from "./postsSaga";
import { watchSearchPostsTitle } from "./searchPostsSaga";

export default function* rootSaga() {
  yield all([watchGetAllPosts(), watchSearchPostsTitle()]);
}
