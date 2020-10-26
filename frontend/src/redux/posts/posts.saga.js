import { fork, call, put } from "redux-saga/effects";
import { takeLatest } from "redux-saga/effects";
import { GET_COMMENTS, GET_POSTS, GET_USERS, GET_POST_DETAIL } from "./posts.type"
import {getPostsSucceedAction, getCommentsSucceedAction, getUsersSucceedAction, getPostDetailSucceedAction} from "./posts.action"
import { getPostsAsync, getPostDetailAsync } from "../../service/blogs.service"
import { getCommentsAsync } from "../../service/comments.service"
import {getUsersAsync} from "../../service/user.service"

function* getPostsWorker() {
    try {
        const { data } = yield call(getPostsAsync);
        yield put(getPostsSucceedAction(data))
    } catch (error) {
        console.log("[getPostsWorker]", error)
    }
}

function* getPostsWatcher() {
    yield takeLatest(
        GET_POSTS,
        getPostsWorker
    )
}

function* getCommentsWorker() {
    try {
        const { data } = yield call(getCommentsAsync)
        yield put(getCommentsSucceedAction(data))
    } catch (error) {
        console.log("[getCommentsWorker]")
    }
}

function* getCommentsWatcher() {
    yield takeLatest(
        GET_COMMENTS,
        getCommentsWorker
    )
}

function* getUsersWorker() {
    try {
        const { data } = yield call(getUsersAsync)
        yield put(getUsersSucceedAction(data))
    } catch (error) {
        console.log("[getUsersWorker]", error)
    }
}

function* getUsersWatcher() {
    yield takeLatest(
        GET_USERS,
        getUsersWorker
    )
}

function* getPostDetailWorker(action) {
    try {
        const { data } = yield call(getPostDetailAsync, action.payload)
        yield put(getPostDetailSucceedAction(data))
    } catch (error) {
        console.log("[getPostDetailWorker]", error)
    }
}

function* getPostDetailWatcher() {
    yield takeLatest(
        GET_POST_DETAIL,
        getPostDetailWorker
    )
}

export default [
    fork(getPostsWatcher),
    fork(getCommentsWatcher),
    fork(getUsersWatcher),
    fork(getPostDetailWatcher)
  ];