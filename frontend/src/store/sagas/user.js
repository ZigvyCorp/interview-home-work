import { takeLatest, call, put } from 'redux-saga/effects'

import { UserTypes, UserActions } from '../redux/user'

export default api => [takeLatest(UserTypes.SIGN_IN, signIn, api), takeLatest(UserTypes.SIGN_UP, signUp, api)]

function* signIn(api, { params, callback }) {
  try {
    const { success, data, error } = yield call(api.user.signIn, params)
    if (!success) {
      throw error
    }
    yield put(UserActions.signInSuccess(data))

    typeof callback === 'function' && callback()
  } catch (err) {
    yield put(UserActions.signInFailed(err))
  }
}

function* signUp(api, { params }) {
  try {
    const { success, data, error } = yield call(api.user.signUp, params)
    if (!success) {
      throw error
    }
    yield put(UserActions.signUpSuccess(data))
  } catch (err) {
    yield put(UserActions.signUpFailed(err))
  }
}
