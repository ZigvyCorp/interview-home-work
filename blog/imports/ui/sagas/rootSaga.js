import { all } from "redux-saga/effects";
import { postSagas } from "./postSagas";

export default function* rootSaga() {
  yield all([
    ...postSagas
  ]);
}
