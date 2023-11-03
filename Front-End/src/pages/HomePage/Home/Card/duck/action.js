import { put, takeLatest,call } from 'redux-saga/effects';
import api from '../../../../../utils/apiUtils';
import * as ActionType from './types';

const fetchDataFromAPI = () => {
  return api.get(`api/post/getPost`).then(r=>r.data).catch(e=>e.messege);
};

export function* fetchData(action) {
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

export const actListPostRequest = () => {
  return {
    type: '@REQUEST',
  };
};
export default watchFetchData;