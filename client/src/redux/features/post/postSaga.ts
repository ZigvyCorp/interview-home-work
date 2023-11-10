import { takeLatest, put, call, debounce } from 'redux-saga/effects'
import { PayloadAction } from '@reduxjs/toolkit'
import {
  getPostById,
  getPostByIdFailure,
  getPostByIdSuccess,
  getPosts,
  getPostsFailure,
  getPostsSuccess,
  preSearchPosts,
  searchPosts,
  searchPostsFailure,
  searchPostsSuccess,
} from './postSlice'
import { api } from '../../../services/api'
import {
  GetPostByIdResponse,
  GetPostsParams,
  GetPostsResponse,
} from './postInterfaces'

function* handleGetPosts(action: PayloadAction<GetPostsParams>) {
  try {
    const res: { data: GetPostsResponse } = yield call(() =>
      api('/posts', { params: action.payload })
    )
    yield put(getPostsSuccess(res.data))
  } catch (error: any) {
    yield put(getPostsFailure(error.message))
  }
}

function* handleGetPostById(action: PayloadAction<string>) {
  try {
    const res: { data: GetPostByIdResponse } = yield call(() =>
      api(`/posts/${action.payload}`)
    )
    yield put(getPostByIdSuccess(res.data.post))
  } catch (error: any) {
    yield put(getPostByIdFailure(error.message))
  }
}

function* handlePreSearchPosts(action: PayloadAction<string>) {
  try {
    yield put(searchPosts(action.payload))
  } catch (error: any) {
    yield put(searchPostsFailure(error.message))
  }
}

function* handleSearchPosts(action: PayloadAction<string>) {
  try {
    const res: { data: GetPostsResponse } = yield call(() =>
      api('/posts', { params: { search: action.payload } })
    )
    yield put(searchPostsSuccess(res.data))
  } catch (error: any) {
    yield put(searchPostsFailure(error.message))
  }
}

export function* postSaga() {
  yield takeLatest(getPosts.type, handleGetPosts)
  yield takeLatest(getPostById.type, handleGetPostById)
  yield debounce(300, preSearchPosts.type, handlePreSearchPosts)
  yield takeLatest(searchPosts.type, handleSearchPosts)
}
