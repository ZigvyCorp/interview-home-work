import { put, call, takeLatest } from 'redux-saga/effects';
import * as homepageConstants from 'redux/constants/homepageConstants'
import { getPosts } from 'API'

function* getPostsRequest(action) {
  try {
    const res = yield call(getPosts)
    if (res.status == 200) {
      yield put({
        type: homepageConstants.GET_POSTS_SUCCESS,
        payload: res.data
      })
    }
  } catch (error) {
    console.log(error)
  }
}

export default function* HomePage() {
  yield takeLatest(homepageConstants.GET_POSTS_REQUEST, getPostsRequest)
}
