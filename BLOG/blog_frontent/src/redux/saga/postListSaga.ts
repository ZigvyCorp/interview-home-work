import { call, put, takeEvery } from "redux-saga/effects";
import postApi from "services/postApi";
import {
    getPostsListFailure,
    getPostsListSucces, getPostsListSearchSucces, getPostsListSearchFailure
} from "../actions/postListActions";
import { GET_POSTS, GET_POSTS_SEARCHED } from "constants/actionRedux";

interface GetListPostAction {
    type: string
    payload: {
        page: number,
        search: string
    }
}

function* getListPostsSaga(action: GetListPostAction): Generator<any, void, any> {
    try {
        const { page, search } = action.payload
        const posts = yield call(postApi.getListPosts, { page, search });
        yield put(getPostsListSucces(posts));

    } catch (error) {
        yield put(getPostsListFailure());
    }
}


function* getListPostsSearchSaga(action: GetListPostAction): Generator<any, void, any> {
    try {
        const { page, search } = action.payload
        const posts = yield call(postApi.getListPosts, { page, search });
        yield put(getPostsListSearchSucces(posts));

    } catch (error) {
        yield put(getPostsListSearchFailure());
    }
}

function* postSaga() {
    yield takeEvery(GET_POSTS, getListPostsSaga);
    yield takeEvery(GET_POSTS_SEARCHED, getListPostsSearchSaga);
}

export default postSaga;
