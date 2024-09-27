import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchDataRequest, fetchDataSuccess, fetchDataFailure } from '../../features/dataSlice.js'
import { getPostsData } from '../../services/post.service.js';

function* fetchData(action) {
  try {
    const pageIndex = action.payload
    const response = yield call(getPostsData , pageIndex);
    
    yield put(fetchDataSuccess(response.data));
  } catch (error) {
    yield put(fetchDataFailure(error.message));
  }
}

export function* watchFetchData() {
  yield takeEvery(fetchDataRequest, fetchData);
}