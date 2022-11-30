import { all } from "redux-saga/effects";
import commentSaga from "../features/comment/commentSaga";
import postSaga from "../features/post/postSaga";
import userSaga from "../features/user/userSaga";

function* helloSaga() {
    console.log("Hello saga");
}

export default function* rootSaga() {
    console.log("root saga");
    yield all([helloSaga(), postSaga(), userSaga(), commentSaga()]);
}
