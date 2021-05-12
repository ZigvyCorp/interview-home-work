import { all } from "redux-saga/effects";

import postSaga from "./postSaga";
import userSaga from "./userSaga";
import commentSaga from "./commentSaga";

export default function* rootSaga() {
  yield all([postSaga(), userSaga(), commentSaga()]);
}
