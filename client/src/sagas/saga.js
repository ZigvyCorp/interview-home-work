import { put, takeEvery, all, call } from 'redux-saga/effects'

const getUserList = async () => {
  const res = await fetch('/api/get_user_list')
  return await res.json()
}

function* requestUserList() {
  const userList = yield call(getUserList)
  yield put({ type: 'UPDATE_USER_LIST', userList })
}

function* watchRequestUserList() {
  yield takeEvery('REQUEST_USER_LIST', requestUserList)
}

const authenticate = async (credential) => {
  const res = await fetch('/api/authenticate', {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify(credential)
  })
  return await res.json()
}

function* userLogin(action) {
  const result = yield call(authenticate, action.data)
  const userId = result.userId
  if (userId) {
    yield put({ type: 'UPDATE_CURRENT_USER_ID', userId })
  } 
}

function* watchUserLogin() {
  yield takeEvery('USER_LOGIN', userLogin)
}

export default function* rootSaga() {
  yield all([
    watchRequestUserList(),
    watchUserLogin()
  ])
}