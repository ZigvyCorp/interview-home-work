import { call, put } from "redux-saga/effects";
import callApi from '../../util/apiCaller';
import { getUsersSuccess, getUsersFail
  } from '../actions/UserActions'
export function* getAllUsers(action) {
  const res = yield call(callApi, 'user/users')
  if(res.success)
  {
    yield put(getUsersSuccess(res.data))
  } else {
    yield put(getUsersFail(res.data))
  }
}

