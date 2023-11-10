import apiAxios from '../../utils/axios'
import { debounce, call, put, takeEvery } from 'redux-saga/effects'
import { getPostsSuccess, onLoading } from './postsSlice'
import { GET_POSTS_FETCH, ON_TYPING_SEARCH } from './actions'

const postsFetch = (page = 1, title) => {
  return async function () {
    return apiAxios
      .get('/posts', { params: { page, title } })
      .then((res) => res.data)
  }
}
function* workGetPostsFetch(action) {
  yield put(onLoading())
  const result = yield call(
    postsFetch(action.payload?.page, action.payload?.title),
  )
  yield put(getPostsSuccess(result))
}

export function* mySaga() {
  yield takeEvery(GET_POSTS_FETCH, workGetPostsFetch)
  yield debounce(300, ON_TYPING_SEARCH, workGetPostsFetch)
}
