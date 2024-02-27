import { all } from "redux-saga/effects";
import counterSaga from "../features/counter/countSaga";

function* rootSaga() {
  console.log("root saga");
  yield all([counterSaga()]);
}

export default rootSaga;
