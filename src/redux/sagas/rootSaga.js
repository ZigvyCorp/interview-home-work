// rootSaga.js
import { all } from "redux-saga/effects";
import postSaga from "./postSaga";
import commentSaga from "./commentSaga";
import userSaga from "./userSaga";

function* rootSaga() {
    yield all([commentSaga(), postSaga(), userSaga()]);
}
export default rootSaga