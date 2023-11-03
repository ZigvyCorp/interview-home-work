import { all } from "redux-saga/effects";
import { getPostsSaga } from "./postSaga";
import { getCommentsSaga } from "./commentSaga";
import { getPostDetailSaga } from "./postDetailSaga";

export default function* rootSaga() {
  yield all([getPostsSaga(), getCommentsSaga(),getPostDetailSaga()]);
}
