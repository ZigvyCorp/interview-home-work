import { call, takeLatest, put } from 'redux-saga/effects';
import { GET_LIST_COMMANDS } from "../Constant/Constant";
import { commentServices } from '../../Services/CommentService';
import { getComments } from '../Reducers/CommentReducer';

function *getCommentUsersSaga() {
  try {
    let {data} = yield call(() => commentServices.getComment())
    yield put(getComments(data))
  } catch (error) {
    
  }
}

export function *listenGetCommentUsersSaga() {
  yield takeLatest(GET_LIST_COMMANDS, getCommentUsersSaga)
}