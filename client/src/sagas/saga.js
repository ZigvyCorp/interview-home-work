import { put, takeEvery, all, call } from 'redux-saga/effects'

const getUserList = () => {
  return fetch('/api/get_user_list').then(res => res.json())
}

function* requestUserList() {
  const userList = yield call(getUserList)
  yield put({ type: 'UPDATE_USER_LIST', userList })
}

function* watchRequestUserList() {
  yield takeEvery('REQUEST_USER_LIST', requestUserList)
}

export default function* rootSaga() {
  yield all([
    watchRequestUserList()
  ])
}