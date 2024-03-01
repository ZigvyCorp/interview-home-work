import { all } from "redux-saga/effects";
import { watchFetchPostsSaga } from "pages/posts/redux/posts.saga";

export default function* rootSaga() {
  yield all([watchFetchPostsSaga()]);
}
