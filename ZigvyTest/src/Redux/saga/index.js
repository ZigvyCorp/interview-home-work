import { all } from "redux-saga/effects";

import { watchGetPost } from "./postSaga";

export default function* rootSaga() {
  yield all([watchGetPost()]);
}
