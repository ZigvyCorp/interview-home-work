import { all } from "redux-saga/effects"
import { listenGetCommentUsersSaga } from "./CommentSaga";
import { listenGetListPostSaga } from "./PostSaga";
import { listenGetListUsersSaga } from "./UserSaga"

export function *rootSaga() {
  yield all([
    listenGetListPostSaga(),
    listenGetListUsersSaga(),
    listenGetCommentUsersSaga()
  ])
}