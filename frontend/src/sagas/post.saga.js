import { call, put, takeLatest } from "redux-saga/effects";
import { postConstants } from "../constants";
import { postServices } from "../services";

export function* postSaga() {
	yield takeLatest(postConstants.GET_POSTS_REQUEST, watchGetPosts);
}

function* watchGetPosts(action) {
	try {
		const { skip, limit, keyword } = action.payload;
		const posts = yield call(postServices.getPosts, skip, limit, keyword);
		yield put({ type: postConstants.GET_POSTS_SUCCESS, payload: posts });
	} catch (error) {
		yield put({ type: postConstants.GET_POSTS_FAILURE, payload: error });
	}
}
