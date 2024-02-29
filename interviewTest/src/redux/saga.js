import { all } from "redux-saga/effects";
import { postsSaga } from "./saga/postSaga";
import { commentSaga } from "./saga/commentSaga";
import { searchPostsSaga } from "./saga/searchPostSaga";
import { registerSaga } from "./saga/registerSaga";
import { loginSaga } from "./saga/loginSaga";

export default function* mySaga() {
  yield all([
    ...postsSaga,
    ...commentSaga,
    ...searchPostsSaga,
    ...registerSaga,
    ...loginSaga,
  ]);
}
