import { call, fork, put, takeLatest } from "redux-saga/effects";
// import { fetchPosts } from "../api";
import { getAllPost } from "../../api/postApi";
import {
    getPostsSucess,
    getPostsFailure,
    getPostsRequest,
} from "../post/postsSlice";

function* getPosts({ payload }) {
    try {
        const { page, searchTerm } = payload;
        const posts = yield call(getAllPost, page, searchTerm);
        yield put(getPostsSucess(posts));
    } catch (error) {
        yield put(getPostsFailure(error));
    }
}

function* watchGetPosts() {
    yield takeLatest(getPostsRequest.type, getPosts);
}

export const postsSaga = [fork(watchGetPosts)];
