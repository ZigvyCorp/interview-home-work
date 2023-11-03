import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { HOST_API_KEY } from '../../../utils/constants/app';

function* fetchComments(action) {
  try {
    yield put({ type: 'COMMENTS_FETCH_REQUESTED' })
    const response = yield call(axios.get, `${HOST_API_KEY}/comments`, { params: action.payload });
    yield put({ type: 'COMMENTS_FETCH_SUCCEEDED', payload: response.data.data });
  } catch (error) {
    yield put({ type: 'COMMENTS_FETCH_FAILED', error: error.message });
  }
}

function* watchFetchComments() {
  yield takeEvery('FETCH_COMMENTS', fetchComments);
}

export default watchFetchComments;
