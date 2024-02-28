import postApi from "../../apis/postApi";
import { postActions } from "./postSlice";
import { call, put, takeEvery } from "redux-saga/effects";

function* fetchPostList({ payload }) {
    const { page, limit, ...restParams } = payload;
    try {
        const response = yield call(postApi.getPosts, { page, limit, ...restParams });
        yield put(postActions.fetchPostListSuccess(response));
    } catch (err) {
        console.log("Failed to fetch posts list", err);
        yield put(postActions.fetchPostListFailure());
    }
}

function* searchPosts({ payload }) {
    const { page, limit, keyword, ...restParams } = payload;
    try {
        const response = yield call(postApi.getPosts, { page, limit, keyword, ...restParams });
        yield put(postActions.searchPostsSuccess(response));
    } catch (err) {
        console.log("Failed to search posts", err);
        yield put(postActions.searchPostsFailed());
    }
}

function* fetchPost({ payload }) {
    try {
        const response = yield call(postApi.getPost, payload);
        yield put(postActions.fetchPostSuccess(response));
    } catch (err) {
        console.log("Failed to search post", err);
        yield put(postActions.fetchPostFailed(null));
    }
}

function* postSaga() {
    yield takeEvery(postActions.fetchPostList.type, fetchPostList);
    yield takeEvery(postActions.searchPosts.type, searchPosts);
    yield takeEvery(postActions.fetchPost.type, fetchPost);
}

export default postSaga;