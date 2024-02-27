import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchPostsStart, fetchPostsSuccess, fetchPostsFailure, Post } from '../slices/postSlice';
function* fetchPostsSaga(): Generator<any, void, any> {
    try {
        const response = yield call(fetch, 'https://jsonplaceholder.typicode.com/posts');
        const posts: Post[] = yield response.json();
        console.log({ posts });
        yield put(fetchPostsSuccess(posts)); // Dispatch action to store posts in Redux
    } catch (error: any) {
        yield put(fetchPostsFailure(error.message)); // Dispatch action to handle error
    }
}

export function* watchFetchPosts() {
    yield takeLatest(fetchPostsStart.toString(), fetchPostsSaga);
}
