import { takeEvery, call, put, fork, select } from 'redux-saga/effects';
import * as actions from '../actions/postAction';
import * as api from '../../../../data/callApi';
import { getPostDetail } from '../../../../data/selector';

function* getPosts() {
    try {
      const result = yield call(api.getPostList);
      yield put(actions.getPostsReponse(result.data)); 
    } catch (error) {
      console.error(error);
    }
  }

function* getPostListRequest() {
    yield takeEvery(actions.types.POSTS_REQUEST, getPosts);
}

function* getPostsDetail() {
    try {
      const postDetail = yield select(getPostDetail);
      const result = yield call(api.getDetailPost, postDetail.idPost);
      yield put(actions.getPostsDetailReponse(result.data)); 
    } catch (error) {
      console.error(error);
    }
}

function* getPostListRequestDetail() {
    yield takeEvery(actions.types.POSTS_REQUEST_DETAIL, getPostsDetail);
}

export const postSagasDetail = [fork(getPostListRequestDetail)];
export const postSagas = [fork(getPostListRequest)];