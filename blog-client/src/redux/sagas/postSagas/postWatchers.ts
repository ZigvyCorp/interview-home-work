import { takeLatest, fork, all, take } from "redux-saga/effects";

import { postConsts } from "../../constants";
import * as postWorkers from "./postWorkers";

export function* getListPostSaga() {
  yield takeLatest(
    postConsts.GET_LIST_POST_REQUEST,
    postWorkers.getListPostWorker
  );
}
export function* getCommentInPostSaga() {
  yield takeLatest(
    postConsts.GET_COMMENTS_IN_POST_REQUEST,
    postWorkers.getCommentInPostWorker
  );
}
export function* searchPostSaga() {
  yield takeLatest(
    postConsts.SEARCH_POST_REQUEST,
    postWorkers.searchPostWorker
  );
}
const postWatchers = [
  all([getListPostSaga()]),
  all([getCommentInPostSaga()]),
  all([searchPostSaga()]),
];
export default postWatchers;
