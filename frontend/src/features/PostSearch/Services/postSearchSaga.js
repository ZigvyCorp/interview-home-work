import { put, call, takeEvery } from 'redux-saga/effects';
import { fetchPostSearchSuccess, fetchPostSearchFailure, FETCH_POST_SEARCH_REQUEST } from './postSearchAction';
import { fetchAllPostByKeyWordAPI } from './postSearchService';

function* fetchPostSearchSaga(data) {
    try {
        const res = yield call(fetchAllPostByKeyWordAPI, data.payload);
        yield put(fetchPostSearchSuccess(res.data));
    } catch (error) {
        yield put(fetchPostSearchFailure(error));
    }
}

export default function* watchFetchPostSearch() {
    yield takeEvery(FETCH_POST_SEARCH_REQUEST, fetchPostSearchSaga);
}

