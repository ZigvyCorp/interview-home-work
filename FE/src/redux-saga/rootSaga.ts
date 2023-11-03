// rootSaga.ts
import { all } from "redux-saga/effects";
import { watchFetchPosts } from "./sagas/posts.saga";

function* rootSaga() {
  yield all([watchFetchPosts()]);
}

export default rootSaga;
