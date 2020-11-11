import {put, takeEvery } from 'redux-saga/effects'
import {  
  getUserInfoStarted,
  getUserInfoSuccess,
  getUserInfoFailed
} from '../slices/useInfoSlice'

export const getUserInfoSaga =  function*(){
  try {
     const res = yield fetch('https://jsonplaceholder.typicode.com/users')
     .then(res => res.json())
    yield put(getUserInfoSuccess(res))
  } catch(err) {
    yield put(getUserInfoFailed(err))
  }
}

export function* watchUserInfoRequest(){
  yield takeEvery(getUserInfoStarted, getUserInfoSaga)
}