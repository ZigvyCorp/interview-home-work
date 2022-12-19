import { all } from "redux-saga/effects"
import { listenGetListPostSaga } from "./PostSaga";

export function *rootSaga() {
  yield all([
    listenGetListPostSaga()
  ])
}