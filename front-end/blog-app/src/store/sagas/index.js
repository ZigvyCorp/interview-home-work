import { all } from "redux-saga/effects";
import postsSagas from "./postsSagas";

function* rootSaga() {
  yield all([postsSagas()]);
}

export default rootSaga;
