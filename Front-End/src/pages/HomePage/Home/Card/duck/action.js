import { put, takeLatest,call } from 'redux-saga/effects';
import api from '../../../../../utils/apiUtils';
import * as ActionType from './types';

const fetchDataFromAPI = (page=1) => {
  return api.get(`api/post/getpaging/${page}`).then(r=>r.data).catch(e=>e.messege);
};

function* fetchData(action) {
  try {
    const data = yield call(fetchDataFromAPI);
    yield put({ type: ActionType.LIST_POST_SUCCESS, payload: data });
  } catch (error) {
    yield put({ type: ActionType.LIST_POST_FAIL, error });
  }
}

function* watchFetchData() {
  yield takeLatest(ActionType.LIST_POST_REQUEST, fetchData);
}

export default watchFetchData;