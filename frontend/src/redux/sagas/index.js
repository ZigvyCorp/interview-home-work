import { all } from "redux-saga/effects";
import postSaga from "./postSaga";

function* rootSaga() {
  yield all([
  postSaga(),
  ]);
}

export default rootSaga;
