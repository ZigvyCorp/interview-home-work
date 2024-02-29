import { all } from 'redux-saga/effects'
import postsSaga from './postsSaga'

export function* rootSaga() {
  yield all([postsSaga()])
}
