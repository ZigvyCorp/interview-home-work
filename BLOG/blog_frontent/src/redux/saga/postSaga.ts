import { call, put, takeEvery } from "redux-saga/effects";
import postApi from "services/postApi";
import { getPostFailure, getPostSucces } from "../actions/postActions";
import { GET_POST } from "constants/actionRedux";

interface GetPostByIdAction {
    type: string
    payload: {
        postId: string
    }
}

function* getPostById(action: GetPostByIdAction): Generator<any, void, any> {
    try {
        const { postId } = action.payload
        const post = yield call(postApi.getDetailPost, { postId });
        yield put(getPostSucces(post));

    } catch (error) {
        yield put(getPostFailure());
    }
}

function* postSaga() {
    yield takeEvery(GET_POST, getPostById);
}

export default postSaga;
