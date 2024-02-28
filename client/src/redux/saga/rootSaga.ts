import { all } from "redux-saga/effects";
import { postSaga } from "./post/postSaga";
import { userSaga } from "./user/userSaga";
import { postCommentSaga } from "./post/postCommentSaga";

export default function* rootSaga() {
    yield all([
        postSaga(),
        userSaga(),
        postCommentSaga()
    ])
}