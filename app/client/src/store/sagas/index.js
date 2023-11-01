import { all } from "redux-saga/effects";
import postsSaga from "./postSagas";

function* rootSaga() {
  yield all([postsSaga()]);
}

export default rootSaga;
