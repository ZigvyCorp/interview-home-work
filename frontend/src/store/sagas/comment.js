import { takeLatest, call, put } from 'redux-saga/effects'

import { PostTypes, PostActions } from '../redux/post'

export default api => [takeLatest(PostTypes.CREATE_COMMENT, createComment, api)]

function* createComment(api, { params, callback }) {
  try {
    const { success, data, error } = yield call(api.comment.createComment, params)
    if (!success) {
      throw error
    }
    yield put(PostActions.createCommentSuccess(data))

    typeof callback === 'function' && callback()
  } catch (err) {
    yield put(PostActions.createCommentFailed(err))
  }
}
