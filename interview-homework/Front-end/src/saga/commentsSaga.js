import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {
  fetchCommentsFailure,
  fetchCommentsStart,
  fetchCommentsSuccess,
} from '../redux/commentsSlice';

const BASE_URL = 'http://localhost:5000/api';

function* fetchCommentsData() {
  try {
    const response = yield call(axios.get, `${BASE_URL}/comments`);
    yield put(fetchCommentsSuccess(response.data));
  } catch (error) {
    yield put(fetchCommentsFailure(error));
  }
}

export function* watchFetchComments() {
  yield takeLatest(fetchCommentsStart.type, fetchCommentsData);
}
