import { all } from 'redux-saga/effects'

import makeUserSagas from './user'
import makePostSagas from './post'
import makeCommentSagas from './comment'

export default function*(api) {
  yield all([...makeUserSagas(api), ...makePostSagas(api), ...makeCommentSagas(api)])
}
