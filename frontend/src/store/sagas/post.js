import { takeLatest, call, put } from 'redux-saga/effects'

import { PostTypes, PostActions } from '../redux/post'

export default api => [takeLatest(PostTypes.GET_POSTS, getPosts, api)]

function* getPosts(api, { params, callback }) {
  try {
    const { success, data, error } = yield call(api.post.getPosts, params)
    if (!success) {
      throw error
    }
    yield put(PostActions.getPostsSuccess(data))

    typeof callback === 'function' && callback()
  } catch (err) {
    yield put(PostActions.getPostsFailed(err))
  }
}
