import { all } from "redux-saga/effects";
import postSaga from "./postSaga";
import commentSaga from "./commentSaga";
import userSaga from "./userSaga";


export function *rootSaga() {
    yield all([...postSaga]);
    yield all([...commentSaga]);
    yield all([...userSaga]);
}