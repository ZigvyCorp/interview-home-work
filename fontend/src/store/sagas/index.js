import { all } from "redux-saga/effects";
import fetchPostsSaga from "./post.saga";

function* rootSaga() {
  yield all([fetchPostsSaga()]);
}

export default rootSaga;