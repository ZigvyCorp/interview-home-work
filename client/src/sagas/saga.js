import { put, takeEvery, all, call, takeLatest } from 'redux-saga/effects'

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
  } 
}

function* watchUserLogin() {
  yield takeEvery('USER_LOGIN', userLogin)
}

function* userLogout(action) {
  const userId = action.userId
  yield put({ type: 'UPDATE_CURRENT_USER_ID', userId })
}

function* watchUserLogout() {
  yield takeEvery('USER_LOGOUT', userLogout)
}

const submitReplyToServer = async (data) => {
  const res = await fetch('/api/submit_reply', {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify(data)
  })
  return await res.json()
}

function* submitReply(action) {
  const data = action.data
  const result = yield call(submitReplyToServer, data)
  yield put({ type: 'UPDATE_COMMENT_LIST', comment: result })
}

function* watchSubmitReply() {
  yield takeLatest('SUBMIT_REPLY', submitReply)
}

export default function* rootSaga() {
  yield all([
    watchRequestData(),
    watchUserLogin(),
    watchUserLogout(),
    watchSubmitReply()
  ])
}