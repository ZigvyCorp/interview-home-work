import { call, put, takeLatest } from 'redux-saga/effects';
import { setUsers } from '../reducers/userReducer';
import { fetchUsers } from '../../apis/userApi';
import { User } from '../../types/userType';

function* fetchUsersSaga() {
  try {
    const users: User[] = yield call(fetchUsers); 
    yield put(setUsers(users)); 
  } catch (error) {
    console.error('Error fetching users:', error);
  }
}

export function* watchFetchUsers() {
  yield takeLatest('FETCH_USERS', fetchUsersSaga);
}
    