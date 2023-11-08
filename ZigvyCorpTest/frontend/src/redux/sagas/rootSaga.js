import { all } from "redux-saga/effects";
import userWatchers from "./userSagas/userWatchers";
import productWatchers from "./productSagas/productWatchers";

export default function* rootSaga() {
  yield all([...userWatchers, ...productWatchers]);
}
