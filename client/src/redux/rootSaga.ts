import { all } from 'redux-saga/effects'
import { postSaga } from './features/post/postSaga'
import { userSaga } from './features/user/userSaga'

export default function* rootSaga() {
  yield all([postSaga(), userSaga()])
}
