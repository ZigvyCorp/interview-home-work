import { call, put } from 'redux-saga/effects';
import {
  getUserByIdFailed,
  setUserById,
  setUsers,
} from '../../actions/userActions';
import { requestGetUserById, requestGetUsers } from '../requests/user';

export function* handleGetUsers(action) {
  try {
    const response = yield call(requestGetUsers);
    const { data } = response;

    yield put(setUsers(data));
  } catch (error) {
    console.log(error);
  }
}

export function* handleGetUserById(action) {
  try {
    const response = yield call(requestGetUserById, action.payload.userId);
    const { data } = response;

    yield put(setUserById(data));
  } catch (error) {
    yield put(getUserByIdFailed);
  }
}
