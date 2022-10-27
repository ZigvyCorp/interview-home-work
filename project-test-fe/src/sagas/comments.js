import { takeEvery, call, put, fork, select } from 'redux-saga/effects';
import * as actions from '../actions';
import * as api from '../api/post';
import {getCommentDetail as getCommentPost} from '../selectors';

function* getComments() {
    try {
      const result = yield call(api.getCommentList);
      yield put(actions.getComments(result.data)); 
    } catch (error) {
      console.error(error);
    }
  }

function* getCommentRequest() {
    yield takeEvery(actions.types.GET_USERS_REQUEST, getComments);
}

function* getCommentDetail() {
    try {
      const commentDetail = yield select(getCommentPost);
      const result = yield call(api.getCommentDetailPost, commentDetail.idPost);
      yield put(actions.getCommentsDetail(result.data)); 
    } catch (error) {
      console.error(error);
    }
}

function* getCommentRequestDetail() {
    yield takeEvery(actions.types.GET_POSTS_COMMENT_DETAIL, getCommentDetail);
}

export const commentSagas = [fork(getCommentRequest)];
export const commentDetailSagas = [fork(getCommentRequestDetail)];


// export default commentSagas;