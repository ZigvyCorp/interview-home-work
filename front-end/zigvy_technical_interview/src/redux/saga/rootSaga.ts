import { all, fork } from "redux-saga/effects";
import postsSaga from "./posts/postSaga";
import postIdSaga from "./posts/postIdSaga";

export function* rootSaga() {
  yield all([fork(postsSaga), fork(postIdSaga)]);
}
