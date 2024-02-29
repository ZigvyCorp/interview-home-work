import { all, takeEvery, takeLatest } from "redux-saga/effects";
import { getPost } from "../../features/post/postSlice";
import { handleGetPost } from "./handlers/post";
import { getComment } from "../../features/comment/commentSlice";
import { handleGetComment } from "./handlers/comment";
import { getUser } from "../../features/user/userSlice";
import { handleGetUser } from "./handlers/user";

function* fetchPostSaga() {
    yield takeEvery(getPost.type, handleGetPost);
}

function* fetchCommentSaga() {
    yield takeEvery(getComment.type, handleGetComment);
}

function* fetchUserSaga() {
    yield takeEvery(getUser.type, handleGetUser);
}
export default function* rootSaga() {
    yield all([fetchPostSaga(), fetchCommentSaga(), fetchUserSaga()]);
}
