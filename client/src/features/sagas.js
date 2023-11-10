import { all } from "redux-saga/effects";
import { watchFetchData } from "../utils/apiSaga";

export default function* rootSaga() {
  yield all([watchFetchData()]);
}
