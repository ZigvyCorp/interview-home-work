import { all } from "redux-saga/effects";
import { watchGetPosts } from "./post/saga";
import { watchGetComments } from "./comments/saga";

export default function* rootSaga() {
    yield all([
        watchGetPosts(),
        watchGetComments()
    ])
}