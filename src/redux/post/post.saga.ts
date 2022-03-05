/**
 * get posts
 */
import { AxiosResponse } from "axios"
import { call, fork, put, takeEvery, takeLatest } from "redux-saga/effects"
import { getListCommentsAsync, getListPostsAsync } from "../../services/post.service"
import { CommentModel } from "./../../models/comment"
import { PostModel } from "./../../models/post"
import { getCommentsSuccessAction, getPostsSuccessAction } from "./post.action"
import { CommentsRequest, PostType } from "./post.type"

/**
 * get posts
 */

export function* getPostsSaga() {
	try {
		const { data }: AxiosResponse<PostModel[]> = yield call(getListPostsAsync)

		yield put(getPostsSuccessAction(data))
	} catch (error) {
		console.log("[getPostsSaga] " + error)
	}
}

function* getPostsSagaWatcher() {
	yield takeLatest(PostType.GET_POSTS, getPostsSaga)
}

/**
 * get comments
 */
export function* getCommentsSaga(request: CommentsRequest) {
	try {
		const { data }: AxiosResponse<CommentModel[]> = yield call(getListCommentsAsync, request.payload)

		yield put(getCommentsSuccessAction(request.payload, data))
	} catch (error) {
		console.log("[getCommentsSaga] " + error)
	}
}

function* getCommentsSagaWatcher() {
	yield takeEvery(PostType.GET_COMMENTS, getCommentsSaga)
}

export default [fork(getPostsSagaWatcher), fork(getCommentsSagaWatcher)]
