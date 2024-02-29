import { call, fork, put, takeLatest } from 'redux-saga/effects'
import { getAllPost } from '../../api/postApi'
import { getPostsSucess, getPostsFailure, getPostsRequest } from '../post/postSlice'

function* getPosts({ payload }) {
  try {
    const { page, search, perPage } = payload
    const posts = yield call(getAllPost, page, perPage, search)
    yield put(getPostsSucess(posts))
  } catch (error) {
    yield put(getPostsFailure(error))
  }
}

function* watchGetPosts() {
  yield takeLatest(getPostsRequest.type, getPosts)
}

export const postsSaga = [fork(watchGetPosts)]
