import {put, takeEvery } from 'redux-saga/effects'
import {  
  fetchCommentStarted,
  fetchCommentSuccess,
  fetchCommentFailed,
} from '../slices/commentSlice'

export const getCommentSaga =  function*(){
  try {
     const res = yield fetch(`https://jsonplaceholder.typicode.com/comments/`)
     .then(res => res.json())
    yield put(fetchCommentSuccess(res))
  } catch(err) {
    yield put(fetchCommentFailed(err))
  }
}

export function* watchCommentRequest(){
  yield takeEvery(fetchCommentStarted, getCommentSaga)
}