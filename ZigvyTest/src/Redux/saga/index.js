import { all } from "redux-saga/effects";

import { watchGetPost, watchReactPost } from "./postSaga";

export default function* rootSaga() {
  yield all([watchGetPost(), watchReactPost()]);
}
