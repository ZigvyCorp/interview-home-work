import { call, put, takeLatest, all } from "redux-saga/effects";
import { CommentActionType } from "../actionTypes";
import { LoadingActions } from "../actions";
import { BaseAction } from "../actions/BaseAction";
import { Comments } from "../../API/Comment/Interface";
import { fetchCommentsService } from "../../API/Comment/ApiService";
import { fetchCommentsDetailService } from "../../API/Comment/ApiService";
import { CommentActions } from "../actions";

function* fetchComments() {
  try {
    yield put(LoadingActions.start());
    const result: Comments.FetchCommentsResponse = yield call(
      fetchCommentsService
    );
    yield put(CommentActions.setComments(result));
    yield put(LoadingActions.stop());
  } catch (error) {
    yield put(LoadingActions.stop());
    yield put(CommentActions.setComments({ items: [] }));
  }
}

function* fetchCommentsDetail(action: BaseAction) {
  try {
    yield put(LoadingActions.start());
    const result: Comments.Comment = yield call(
      fetchCommentsDetailService,
      action?.payload
    );
    yield put(CommentActions.setCommentsDetail(result, action?.payload.post));
    yield put(LoadingActions.stop());
  } catch (error) {
    yield put(LoadingActions.stop());
    yield put(CommentActions.setCommentsDetail({}, action?.payload.post));
  }
}

export default function* () {
  yield all([takeLatest(CommentActionType.fetchComments, fetchComments)]);
  yield all([
    takeLatest(CommentActionType.fetchCommentsDetail, fetchCommentsDetail),
  ]);
}
