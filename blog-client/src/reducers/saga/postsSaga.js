import axios from "axios";
import { call, select, put, takeEvery } from "redux-saga/effects";
import { ApiConfig } from "../../config/api.config";
import { loadPostsSuccess } from "../postReducer";

function* loadPosts() {
	const { page, size, search } = yield select((state) => state.posts);

	const apiUrl = `${
		ApiConfig.Posts.GetAll
	}?page=${page}&size=${size}&search=${encodeURIComponent(search)}`;

	const postsRes = yield call(() => axios.get(apiUrl));
	yield put(loadPostsSuccess(postsRes.data));
}

function* postsSaga() {
	yield takeEvery("posts/startLoadPosts", loadPosts);
}

export default postsSaga;
