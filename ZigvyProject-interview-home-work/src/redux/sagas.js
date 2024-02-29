import { all } from "redux-saga/effects";
import { postsSaga } from "./post/postSaga";
import { usersSaga } from "./user/userSaga";

export default function* rootSaga() {
  yield all([...postsSaga, ...usersSaga]);
}
