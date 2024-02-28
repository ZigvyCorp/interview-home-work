import { call, put, select, takeLatest } from 'redux-saga/effects';
import {
    fetchPostsStart,
    fetchPostsSuccess,
    fetchPostsFailure,
    Post,
    loadMorePostsSuccess,
    loadMorePostsStart,
    searchPostsStart
} from '../slices/postSlice';
import axios from 'axios';

async function fetchPosts(page: number, keyword: string) {
    const res = await axios.get(`http://localhost:3000/api/posts?page=${page}&keyword=${keyword}`);
    return res.data.posts;
}

function* fetchPostsSaga(): Generator<any, void, any> {
    try {
        const { keyword } = yield select(state => state.posts);
        const posts: Post[] = yield call(fetchPosts, 1, keyword);
        yield put(fetchPostsSuccess(posts));
    } catch (error: any) {
        yield put(fetchPostsFailure(error.message));
    }
}

function* loadMorePostsSaga() {
    const { page, keyword } = yield select(state => state.posts);
    try {
        const morePosts: Post[] = yield call(fetchPosts, page + 1, keyword);
        yield put(loadMorePostsSuccess(morePosts));
    } catch (error: any) {
        yield put(fetchPostsFailure(error.message));
    }
}

export function* watchFetchPosts() {
    yield takeLatest(fetchPostsStart.toString(), fetchPostsSaga);
    yield takeLatest(loadMorePostsStart.toString(), loadMorePostsSaga);
    yield takeLatest(searchPostsStart.toString(), fetchPostsSaga);
}
