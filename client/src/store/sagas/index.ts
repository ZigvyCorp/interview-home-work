import { all } from "redux-saga/effects";
import { postSaga } from "./post.saga";
import { userSaga } from "./user.saga";

function* rootSaga() {
  yield all([postSaga(), userSaga()]);
}
export default rootSaga;
