import { all } from "redux-saga/effects";
import * as PostServices from "./PostSaga";

export function* rootSaga() {
	yield all([
		PostServices.followGetPostByUserIDSaga(),
		PostServices.followGetAllCommentsSaga(),
		PostServices.followGetAllPostsSaga(),
		PostServices.followGetCommentsOfPostSaga(),
	]);
}
