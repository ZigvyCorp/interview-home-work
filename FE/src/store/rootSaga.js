
import { all } from 'redux-saga/effects'
import postSaga from './postsSlice/saga'


export default function* rootSaga() {
  yield all([postSaga()])
}

