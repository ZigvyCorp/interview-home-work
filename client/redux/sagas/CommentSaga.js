import { call, put } from "redux-saga/effects";
import callApi from '../../util/apiCaller';
import { getCommentsSuccess, getCommentsFail
  } from '../actions/CommentActions'
export function* getCommentsRequest(action) {
  const res = yield call(callApi, 'comment/comments')
  if(res.success)
  {
    yield put(getCommentsSuccess(res.data))
  } else {
    yield put(getCommentsFail(res.data))
  }
}

