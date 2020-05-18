/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import UserActions, { UserSelectors, UserTypes } from '../App/reducer';
import request from '../../utils/request';

const api = request.create();

export function* login(data) {
  const response = yield call(api.post, 'api/users/login', { ...data });
  if (response.ok) {
    yield put(UserActions.userSuccess(response.data));
  } else {
    yield put(GithubActions.userFailure(response.data));
  }
}

export default function* saga() {
  yield takeLatest(UserTypes.LOGIN_REQUEST, login);
}
