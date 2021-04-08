import { all } from "redux-saga/effects";
import postsSaga from "./postsSaga";

export default function* rootSaga() {
  yield all([...postsSaga]);
}
