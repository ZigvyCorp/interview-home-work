// sagas/index.js

import { all } from "redux-saga/effects";
import { watchFetchPosts } from "./postSaga";
import { watchFetchComments } from "./commentSaga";

export default function* rootSaga() {
  yield all([watchFetchPosts(), watchFetchComments()]);
}
