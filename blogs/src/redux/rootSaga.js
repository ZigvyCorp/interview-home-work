import { all } from "redux-saga/effects";
import authSaga from "./sagas/authSaga";
import postSaga from "./sagas/postSaga";
import watchFetchComments from "./sagas/commentsSaga";

export default function* rootSaga() {
  try {
    yield all([authSaga(), postSaga(), watchFetchComments()]);
  } catch (error) {
    console.error("Root saga error:", error);
  }
}
