import { takeEvery, call, put, all } from "redux-saga/effects";
import { postsTypes } from "../action-types/postActionTypes";
import postAPI from "../../api/post-api";
import { fetchPostFailure, fetchPostSuccess } from "../actions/postAction";
import { FetchPostsRequest } from "../types/post.type";

function* fetchPost(action: FetchPostsRequest): any {
	try {
		const data = yield call(
			postAPI.getMany,
			action.payload.page,
			action.payload.limit,
			action.payload.search
		);

		yield put(fetchPostSuccess(data));
	} catch (error: any) {
		yield put(fetchPostFailure({ error: error.message }));
	}
}

function* postSaga() {
	yield all([takeEvery(postsTypes.FETCH_POSTS_REQUEST, fetchPost)]);
}

export default postSaga;
