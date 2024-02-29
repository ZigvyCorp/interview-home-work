import { all } from "redux-saga/effects";
import { getPostsAsync } from "../features/posts/postsSaga";

function* rootSaga() {
  yield all([getPostsAsync()]);
}

export default rootSaga;
