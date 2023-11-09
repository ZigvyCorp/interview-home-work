import { all } from "redux-saga/effects";

import blogSaga from "@/modules/blogs/saga";

export default function* rootSaga() {
  yield all([blogSaga()]);
  //   yield all([authSaga()]);
}
