import { all } from "redux-saga/effects";
import { postSaga } from "../features/post/postSlice";
import { todoSaga } from "../features/todo/todoSlice";

export default function* rootSaga() {
  yield all([todoSaga(), postSaga()]);
}
