import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

const getCmtsData = async(id) => { 
  return await axios({
    method: "get",
    url: `https://jsonplaceholder.typicode.com/posts/${id}/comments`
  }).then(result => result.data);
}

function* axiosCmt(action) {
  try {
    const cmts = yield call(getCmtsData, action.payload);
    yield put({type: 'GET_CMTS_SUCCESS', payload: cmts});
  } catch (e) {
    yield put({type: 'GET_CMTS_FAILED', message: e.message});
  }
}

function* cmtsSaga() {
  yield takeEvery('GET_CMTS_REQUEST', axiosCmt);
}

export default cmtsSaga;