import { all } from "redux-saga/effects";
import commentSaga from "./commentSaga";
import postSaga from "./postSagas";
import userSaga from "./userSaga";

export default function* rootSaga() {
  yield all([postSaga(), commentSaga(), userSaga()]);
}
