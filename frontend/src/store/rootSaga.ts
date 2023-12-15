import { all, fork } from "redux-saga/effects";

import {
  watchGetPostDetailSaga,
  watchPaginatePostSaga,
  watchCreatePostSaga,
} from "./sagas/post";
import { watchCreateCommentSaga } from "./sagas/comment";

function* rootSaga() {
  yield all([
    fork(watchPaginatePostSaga),
    fork(watchGetPostDetailSaga),
    fork(watchCreatePostSaga),
    fork(watchCreateCommentSaga),
  ]);
}

export default rootSaga;
