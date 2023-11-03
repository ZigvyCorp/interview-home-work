import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { HOST_API_KEY } from '../../../utils/constants/app';

function* fetchUsers(action) {
  try {
    yield put({ type: 'USERS_FETCH_REQUESTED' })
    const response = yield call(axios.get, `${HOST_API_KEY}/users`, { params: action.payload });
    yield put({ type: 'USERS_FETCH_SUCCEEDED', payload: response.data.data });
  } catch (error) {
    yield put({ type: 'USERS_FETCH_FAILED', error: error.message });
  }
}

function* watchFetchUsers() {
  yield takeEvery('FETCH_USERS', fetchUsers);
}

export default watchFetchUsers;
