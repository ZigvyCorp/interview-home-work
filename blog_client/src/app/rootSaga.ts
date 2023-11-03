import { all } from "redux-saga/effects";
import postSaga from "../features/post/postSaga";
import commentSaga from "../features/comment/commentSaga";
import userSaga from "../features/user/userSaga";

export default function* rootSaga() {
  yield all([userSaga(), postSaga(), commentSaga()]);
}
