import { call, put } from 'redux-saga/effects';
import { setUsers } from '../../actions/userActions';
import { requestGetUsers } from '../requests/user';

export function* handleGetUsers(action) {
  try {
    const response = yield call(requestGetUsers);
    const { data } = response;

    yield put(setUsers(data));
  } catch (error) {
    console.log(error);
  }
}
