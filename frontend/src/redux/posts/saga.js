import { takeLatest, call, put } from 'redux-saga/effects';
import { FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILURE } from './actions';
import axios from 'axios';

function* fetchPostsSaga(action) {
    try {
        const response = yield call(axios.get, `/posts?page=${action.page}`);
        yield put({ type: FETCH_POSTS_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: FETCH_POSTS_FAILURE, error: error.message });
    }
}

export default function* postsSaga() {
    yield takeLatest(FETCH_POSTS_REQUEST, fetchPostsSaga);
}