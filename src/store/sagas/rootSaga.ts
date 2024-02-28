import { all } from "redux-saga/effects";
import counterSaga from "../features/counter/countSaga";

function* rootSaga() {
  yield all([counterSaga()]);
}

export default rootSaga;
