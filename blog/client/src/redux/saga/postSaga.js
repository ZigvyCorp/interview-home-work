import { fork, call, put, takeLatest} from "redux-saga/effects";
import { getAllCommentAPI, getCommentAPI } from "../../api/commentAPI";
import { getPostAPI } from "../../api/postAPI";
import { getUserAPI } from "../../api/userAPI";
import { getCommentsSuccess, getPostDetailSuccess, getPostSuccess, getUsersSuccess } from "../action/postAction";
import { GET_COMMENT, GET_COMMENT_WITH_ID, GET_POST, GET_POST_DETAIL, GET_USER } from "../type/postType";
function* getPostWithID(action){
    try {
        const {payload} = action;
        const {data} = yield call(getPostAPI, payload);
        yield put(getPostSuccess(data))

    } catch (error){
        console.log("[getPostDetailWorker]", error)
    }
}
function* watchGetPosts() {
    yield takeLatest(
        GET_POST,
        getPostWithID
    )
}

function* getPostDetail(action){
    try {
        const {payload} = action;
        const {data} = yield call(getPostAPI, payload);
        yield put(getPostDetailSuccess(data))

    } catch (error){
        console.log("[getPostDetailWorker]", error)
    }
}
function* watchGetPostDetail() {
    yield takeLatest(
        GET_POST_DETAIL,
        getPostDetail
    )
}

function* getUsers(){
    try {
        const {data} = yield call(getUserAPI);
        yield put(getUsersSuccess(data))

    } catch (error){
        console.log("[getPostDetailWorker]", error)
    }
}
function* watchGetUsers() {
    yield takeLatest(
        GET_USER,
        getUsers
    )
}

function* getComments(){
    try {
        const {data} = yield call(getAllCommentAPI);
        console.log(data)
        yield put(getCommentsSuccess(data))
        

    } catch (error){
        console.log("[getPostDetailWorker]", error)
    }
}
function* watchGetComments() {
    yield takeLatest(
        GET_COMMENT,
        getComments
    )
}

const postSagaList = [
    fork(watchGetPosts),
    fork(watchGetUsers),
    fork(watchGetComments),
    fork(watchGetPostDetail)
];
export default postSagaList