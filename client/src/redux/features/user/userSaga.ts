import { takeLatest, put, call } from 'redux-saga/effects'
import { api } from '../../../services/api'
import { GetUserResponse } from './userInterfaces'
import { getUser, getUserFailure, getUserSuccess } from './userSlice'

function* handleGetUser() {
  try {
    const res: { data: GetUserResponse } = yield call(() => api('/users'))
    yield put(getUserSuccess(res.data.user))
  } catch (error: any) {
    yield put(getUserFailure(error.message))
  }
}

export function* userSaga() {
  yield takeLatest(getUser.type, handleGetUser)
}
