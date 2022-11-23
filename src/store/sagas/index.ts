import { all, fork } from "redux-saga/effects";
import PostSaga from "./PostSaga";
import CommentSaga from "./CommentSaga";
import UserSaga from "./UserSaga";

export function* rootSaga() {
  yield all([fork(PostSaga), fork(CommentSaga), fork(UserSaga)]);
}
