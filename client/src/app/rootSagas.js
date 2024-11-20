import { all } from "redux-saga/effects";
import { postSaga } from "../features/post/postSlice";
import { userSaga } from "../features/user/userSlice";

export default function* rootSaga() {
  yield all([postSaga(), userSaga()]);
}
