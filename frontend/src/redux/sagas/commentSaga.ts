import { call, put, takeEvery } from "redux-saga/effects";
import commentApi from "../../apis/commentApi";
import {
  createCommentFailure,
  createCommentSuccess,
  getCommentFailure,
  getCommentSuccess,
} from "../actions/commentActions";
import { CREATE_COMMENT, GET_COMMENT } from "../actions/actions";
import { CreateComment } from "../../types/Comment/types";
import { increaseComment } from "../actions/postActions";

interface SetCommentsAction {
  type: string;
  payload: number;
}

interface CreateCommentAction {
  type: string;
  payload: {
    postId: number;
    body: CreateComment;
  };
}

function* fetchCommentSaga(action: SetCommentsAction) {
  try {
    const { data: comments } = yield call(
      commentApi.fetchComments, 
      action.payload
    );
    const postId = action.payload;
    yield put(getCommentSuccess({ postId, comments }));
  } catch (error) {
    yield put(getCommentFailure());
  }
}

function* createCommentSaga(action: CreateCommentAction) {
  try {
    const { data: comment } = yield call(
      commentApi.createComment,
      action.payload
    );
    yield put(createCommentSuccess(comment));
    yield put(increaseComment(action.payload.postId));
  } catch (error) {
    yield put(createCommentFailure());
  }
}

function* commentSaga() {
  yield takeEvery(GET_COMMENT, fetchCommentSaga);
  yield takeEvery(CREATE_COMMENT, createCommentSaga);
}

export default commentSaga;
