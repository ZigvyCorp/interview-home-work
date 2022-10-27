import { takeEvery, call, put, fork, select } from 'redux-saga/effects';
import * as actions from '../actions';
import * as api from '../api/post';
import {getPostDetail} from '../selectors';

function* getPosts() {
    try {
      const result = yield call(api.getPostList);
      yield put(actions.getPosts(result.data)); 
    } catch (error) {
      console.error(error);
    }
  }

function* getPostListRequest() {
    yield takeEvery(actions.types.GET_POSTS_REQUEST, getPosts);
}

function* getPostsDetail() {
    try {
      const postDetail = yield select(getPostDetail);
      const result = yield call(api.getDetailPost, postDetail.idPost);
      yield put(actions.getPostsDetail(result.data)); 
    } catch (error) {
      console.error(error);
    }
}

function* getPostListRequestDetail() {
    yield takeEvery(actions.types.GET_POSTS_REQUEST_DETAIL, getPostsDetail);
}

export const postSagasDetail = [fork(getPostListRequestDetail)];
export const postSagas = [fork(getPostListRequest)];

// export default postSagas;