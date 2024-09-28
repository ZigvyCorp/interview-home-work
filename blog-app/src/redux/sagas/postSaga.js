import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_POSTS, fetchPostsSuccess, fetchPostsFailure } from '../actions/postActions';

function* fetchPostsSaga(action) {
    const { page = 1, limit = 10 } = action.payload || {};
    try {
        const response = yield call(axios.get, `http://172.20.10.4:3000/api/posts?page=${page}&limit=${limit}`);

        const data = response.data;
        yield put(fetchPostsSuccess(data));
    } catch (error) {
        yield put(fetchPostsFailure(error.message));
    }
}
export default function* postSaga() {
    yield takeEvery(FETCH_POSTS, fetchPostsSaga);
}
