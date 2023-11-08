import { all, fork } from "redux-saga/effects";
import postsSaga from "./postSaga";

export function* rootSaga() {
  yield all([fork(postsSaga)]);
}
