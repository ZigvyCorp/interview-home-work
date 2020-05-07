import { put, takeEvery, all, call } from 'redux-saga/effects'

const getData = async () => {
  const res = await fetch('/api/get_data')
  return await res.json()
}

function* requestData() {
  const data = yield call(getData)
  yield put({ type: 'UPDATE_DATA', data })
}

function* watchRequestData() {
  yield takeEvery('REQUEST_DATA', requestData)
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
    yield call(action.callBack)
  } 
}

function* watchUserLogin() {
  yield takeEvery('USER_LOGIN', userLogin)
}

export default function* rootSaga() {
  yield all([
    watchRequestData(),
    watchUserLogin()
  ])
}