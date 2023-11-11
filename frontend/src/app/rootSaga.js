import blogSaga from "../modules/hompage/blogApi";
import commentSaga from "../modules/hompage/commentApi";
import userSaga from "../modules/user/userApi";
import {all, fork} from 'redux-saga/effects'
function* rootSaga () {
    yield all([fork(userSaga), fork(blogSaga), fork(commentSaga)])
}


export default rootSaga;