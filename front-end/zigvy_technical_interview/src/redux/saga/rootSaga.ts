import { all, fork } from "redux-saga/effects";
import postsSaga from "./posts/postSaga";
import postIdSaga from "./posts/postIdSaga";
import commentPostIdSaga from "./comment/commentPostIdSaga";

export function* rootSaga() {
  yield all([fork(postsSaga), fork(postIdSaga), fork(commentPostIdSaga)]);
}
