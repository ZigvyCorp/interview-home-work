import { fork, all } from "redux-saga/effects";
import postsSaga from "./posts";
import userSaga from "./users";
import commentsSaga from "./comments";

export default function* rootSaga() {
  yield all([fork(postsSaga), fork(userSaga), fork(commentsSaga)]);
}
