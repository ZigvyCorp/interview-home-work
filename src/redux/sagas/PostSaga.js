import { call, put, takeLatest } from "redux-saga/effects";
import { postServices } from "../../services/PostService";
import {
	GET_ALL_COMMENTS,
	GET_ALL_COMMENTS_SAGA,
	GET_ALL_POSTS,
	GET_ALL_POSTS_SAGA,
	GET_COMMENTS_OF_POST_SAGA,
	GET_POST_BY_USERID,
	GET_POST_BY_USERID_SAGA,
} from "../types/PostType";

function* getAllPostsSaga(action) {
	try {
		const { data } = yield call(() => postServices.getAllPosts());
		yield put({ type: GET_ALL_POSTS, allPosts: data });
	} catch (error) {
		console.log(error);
	}
}
export function* followGetAllPostsSaga() {
	yield takeLatest(GET_ALL_POSTS_SAGA, getAllPostsSaga);
}

function* getPostByUserIDSaga(action) {
	try {
		const { data } = yield call(() => postServices.getPostByUserID(action.userID));
		yield put({ type: GET_POST_BY_USERID, posts: data });
	} catch (error) {
		console.log(error);
	}
}
export function* followGetPostByUserIDSaga() {
	yield takeLatest(GET_POST_BY_USERID_SAGA, getPostByUserIDSaga);
}

function* getAllCommentsSaga() {
	try {
		const { data } = yield call(() => postServices.getAllComments());
		yield put({ type: GET_ALL_COMMENTS, comments: data });
	} catch (error) {
		console.log(error);
	}
}
export function* followGetAllCommentsSaga() {
	yield takeLatest(GET_ALL_COMMENTS_SAGA, getAllCommentsSaga);
}

function* getCommentsOfPostSaga(action) {
	try {
		const { data } = yield call(() => postServices.getCommentsOfPost(action.postId));
		yield put({ type: GET_ALL_COMMENTS, comments: data });
	} catch (error) {
		console.log(error);
	}
}
export function* followGetCommentsOfPostSaga() {
	yield takeLatest(GET_COMMENTS_OF_POST_SAGA, getCommentsOfPostSaga);
}
