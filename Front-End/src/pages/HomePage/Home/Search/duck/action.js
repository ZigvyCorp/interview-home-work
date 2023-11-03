import { put, takeLatest,call } from 'redux-saga/effects';
import * as ActionType from './types';

const fetchDataFromAPI = () => {
  return api.get("api/post/getPost").then(r=>r.data).catch(e=>e.messege);
};

function* fetchData(action) {
  try {
    const data = yield call(fetchDataFromAPI);
    yield put({ type: ActionType.SEARCH_SUCCESS, payload: data });
  } catch (error) {
    yield put({ type: ActionType.SEARCH_FAIL, error });
  }
}

function* watchFetchData() {
  yield takeLatest(ActionType.SEARCH_REQUEST, fetchData);
}

export default watchFetchData;