import { all } from "redux-saga/effects";
import * as PostSaga from "./postSaga/postSaga";
export function* rootSaga() {
  yield all([PostSaga.lookUpPostSaga()]);
}
