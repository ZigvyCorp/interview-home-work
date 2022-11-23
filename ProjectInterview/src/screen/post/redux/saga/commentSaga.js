import { takeEvery, call, put, fork, select } from 'redux-saga/effects';
import * as api from '../../../../data/callApi';
import * as actions from '../actions/postAction';
import {getCommentDetail as getCommentPost } from '../../../../data/selector';
function* getComments() {
    try {
      const result = yield call(api.getCommentList);
      yield put(actions.getCommentsReponse(result)); 
    } catch (error) {
      console.error(error);
    }
  }

function* getCommentRequest() {
    yield takeEvery(actions.types.USERS_REQUEST, getComments);
}

function* getCommentDetail() {
    try {
      const commentDetail = yield select(getCommentPost);
      const result = yield call(api.getCommentDetailPost, commentDetail.idPost);
      yield put(actions.getCommentsDetailReponse(result.data)); 
    } catch (error) {
      console.error(error);
    }
}

function* getCommentRequestDetail() {
    yield takeEvery(actions.types.POSTS_COMMENT_DETAIL, getCommentDetail);
}

export const commentSagas = [fork(getCommentRequest)];
export const commentDetailSagas = [fork(getCommentRequestDetail)];