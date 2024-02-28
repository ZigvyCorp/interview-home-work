import { all } from "redux-saga/effects";
import { postsSaga } from "./saga/postSaga";
import { commentSaga } from "./saga/commentSaga";
import { searchPostsSaga } from "./saga/searchPostSaga";

export default function* mySaga() {
  yield all([...postsSaga, ...commentSaga, ...searchPostsSaga]);
}
