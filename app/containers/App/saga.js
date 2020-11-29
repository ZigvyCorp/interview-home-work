/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import UserActions, { UserSelectors, UserTypes } from '../App/reducer';
import request from '../../utils/request';

const api = request.create();

export function* login({ data }) {
  const response = yield call(api.post, 'api/users/login', { ...data });
  if (response.ok && response.data.success) {
    yield put(UserActions.userSuccess(response.data.data));
  } else {
    yield put(UserActions.userFailure(response.data.data));
  }
}

export function* signup({ data }) {
  const response = yield call(api.post, 'api/users/signup', { ...data });
  if (response.ok && response.data.success) {
    yield put(UserActions.userSuccess(response.data.data));
  } else {
    yield put(UserActions.userFailure(response.data.data));
  }
}
