import { all } from "redux-saga/effects";
import blogSaga from "./blogSaga";
import userSaga from "./userSaga";
import commentSaga from "./commentSaga";

function* rootSaga() {
  yield all([blogSaga(), userSaga(), commentSaga()]);
}

export default rootSaga;
