import axios from '../extensions/axiosInstance'
import { put, all, takeEvery } from 'redux-saga/effects'

import { GET_ALL_POSTS, GET_POSTS_FAIL, GET_POSTS_SUCCESS, SEARCH_POSTS, SEND_REQUEST } from './types'

function * getAllPosts (action) {
  try {
    yield put({ type: SEND_REQUEST })
    const {data} = yield axios.get('/api/post', {
      params: {
        pageIndex: action.payload,
        pageSize: 5
      }
    })

    yield put({ type: GET_POSTS_SUCCESS, payload: data })
  } catch (e) {
    yield put({ type: GET_POSTS_FAIL, payload: e.message })
  }
}

function * searchPosts (action) {
  try {
    yield put({ type: SEND_REQUEST })
    const {data} = yield axios.get('/api/post/search', {
      params: {
        term: action.payload
      }
    })

    yield put({ type: GET_POSTS_SUCCESS, payload: data })
  } catch (e) {
    yield put({ type: GET_POSTS_FAIL, payload: e.message })
  }
}

function * watchGetAllPosts() {
  yield takeEvery(GET_ALL_POSTS, getAllPosts)
}

function * watchSearchPosts() {
  yield takeEvery(SEARCH_POSTS, searchPosts)
}

export default function* rootSaga() {
  yield all([
    watchGetAllPosts(),
    watchSearchPosts()
  ])
}
