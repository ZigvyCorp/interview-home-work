import { all, call, put, takeLatest } from 'redux-saga/effects';
import { actionTypes, receiveAllPost } from './actions';
import { receiveAllUser } from '../User/actions';
import { receiveAllComment } from '../Comment/actions';
import * as Api from '../../../api';

function* getAllPost() {
    try {
        //must dispatch 2 actions at once to get author name
        const [postResult, userResult, commentResult] = yield all([
            call(Api.post.fetchAllPost),
            call(Api.user.fetchAllUser),
            call(Api.comment.fetchAllComment)
        ]);
        //use for loop to add author name and comments to post that match the id
        for (let i = 0; i < postResult.length; i++) {
            let name = userResult.filter(user => user.id == postResult[i].userId)[0]?.name;
            let comments = commentResult.filter(cmt => cmt.postId == postResult[i].id);
            postResult[i].author = name;
            postResult[i].comments = comments;
        }
        yield put(receiveAllPost(postResult));
        yield put(receiveAllUser(userResult));
        yield put(receiveAllComment(commentResult));
    } catch (e) {
        console.error(e);
    }
}

export default function* postSaga() {
    yield takeLatest(actionTypes.REQUEST_ALL_POST, getAllPost);
}