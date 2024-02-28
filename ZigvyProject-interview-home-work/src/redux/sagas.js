import { all } from "redux-saga/effects";
import { postsSaga } from "./post/postSaga";

export default function* rootSaga() {
  yield all([...postsSaga]);
}
