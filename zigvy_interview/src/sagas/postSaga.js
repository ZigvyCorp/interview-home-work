import {put, takeEvery } from 'redux-saga/effects'
import {  
  fetchPostStarted,
  fetchPostSuccess,
  fetchPostFailed
} from '../slices/postSlice'

export const fetchPostSaga =  function*({payload}){
  try {
     const res = yield fetch('https://jsonplaceholder.typicode.com/posts')
     .then(res => res.json())
    yield put(fetchPostSuccess(res))
  } catch(err) {
    yield put(fetchPostFailed(err))
  }
}

export function* watchPostRequest(){
  yield takeEvery(fetchPostStarted, fetchPostSaga)
}