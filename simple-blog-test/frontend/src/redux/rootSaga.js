import { call, put, takeEvery, all, take } from "redux-saga/effects";
import { getPostsFailure, getPostsSuccess } from "./postsSlice";
import { getSearchResultSuccess } from "./searchSlice";
import { getPostDetailSuccess } from "./postDetailSlice";

function* getPostsFetch(payload) {
    try {
        const response = yield call(() => fetch(`http://localhost:3500/api/v1/posts?page=${payload.payload}&limit=10`));
        const data = yield response.json();
        const postsData = {
            posts: data.data,
            totalPages: data.totalPages,
            page: data.currentPage
        }
        yield put(getPostsSuccess(postsData));
    } catch (error) {
        yield put(getPostsFailure());
    }
}

function* getSearchResult(payload) {
    try {
        const response = yield call(() => fetch(`http://localhost:3500/api/v1/posts/search?q=${payload.payload}`));
        const data = yield response.json();
        const searchData = {
            post: data.post,
            comments: data.comments
        }
        yield put(getSearchResultSuccess(searchData));
    } catch(error) {
        console.log(error);
    }
}

function* getPostDetailFetch(payload) {
    try {
        const response = yield call(() => fetch(`http://localhost:3500/api/v1/posts/${payload.payload}`));
        const data = yield response.json();
        const postDetaliData = {
            post: data.post,
            comments: data.comments
        }
        
        yield put(getPostDetailSuccess(postDetaliData));
    } catch(error) {
        console.log("erro", error);
    }
}

function* watchAll() {
    yield all([
        takeEvery("posts/getPostsFetch", getPostsFetch),
        takeEvery("search/searchFetch", getSearchResult),
        takeEvery("postDetail/getPostDetailFetch", getPostDetailFetch)
    ]);
}

export default watchAll;
