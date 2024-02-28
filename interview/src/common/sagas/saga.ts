import { all, takeLatest } from "redux-saga/effects";
import { GET_POSTS_REQUEST, GET_SINGLE_POST_REQUEST } from "../actions/post";

import { watchGetAllPosts, watchGetSinglePost } from "../sagas/PostSaga";
import { GET_COMMENT_REQUEST } from "../actions/comment";
import { watchGetCommentByPostId } from "./CommentSaga";

const rootSaga = function* () {
  yield all([takeLatest(GET_POSTS_REQUEST, watchGetAllPosts)]);
  yield all([takeLatest(GET_COMMENT_REQUEST, watchGetCommentByPostId)]);
  yield all([takeLatest(GET_SINGLE_POST_REQUEST, watchGetSinglePost)]);
};
export default rootSaga;
