import {call, put, takeLatest } from "redux-saga/effects";
import { commentService } from "../../../services/InterviewService/commentService";
import { postService } from "../../../services/InterviewService/postService";
import { userService } from "../../../services/InterviewService/userService";
import { STATUS_CODE } from "../../../util/constants/settingSystem";
import { GET_ALL_COMMENT, GET_ALL_COMMENT_SAGA, GET_ALL_POSTS, GET_ALL_POSTS_SAGA, GET_ALL_USER, GET_ALL_USER_SAGA, GET_COMMENT, GET_COMMENT_DETAIL, GET_COMMENT_DETAIL_SAGA, GET_COMMENT_SAGA, GET_DETAIL_POST, GET_DETAIL_POST_SAGA } from "../../constants/Interview/InterviewConstants";
import { DISPLAY_LOADING, HIDE_LOADING } from "../../constants/LoadingConstants";

function* getAllPostSaga(action) {
    // // ! xử lý loading
    yield put({
        type: DISPLAY_LOADING
    })
    try {
        let { data, status } = yield call(() => (
            // priorityService.getALlPriority()
            postService.getAllPost()
            ));

        if (status === STATUS_CODE.SUCCESS) {
            yield put({
                type: GET_ALL_POSTS,
                postData: data
            })
        } else {
            // ! do something
            console.log("err");
        }

    }
    catch (err) {
        console.log("err");
    }
    yield put({
        type: HIDE_LOADING
    })

}

export function* theoDoiGetAllPost() {
    // ! lắng nghe dispatch từ component
    yield takeLatest(GET_ALL_POSTS_SAGA, getAllPostSaga);
}

function* getAllUserSaga(action) {
    // // ! xử lý loading
    yield put({
        type: DISPLAY_LOADING
    })
    try {
        let { data, status } = yield call(() => (
            userService.getAllUser()
            ));
        if (status === STATUS_CODE.SUCCESS) {
            yield put({
                type: GET_ALL_USER,
                userData: data
            })
        } else {
            // ! do something
            console.log("err");
        }

    }
    catch (err) {
        console.log("err");
    }
    yield put({
        type: HIDE_LOADING
    })

}


export function* theoDoiGetAllUser() {
    // ! lắng nghe dispatch từ component
    yield takeLatest(GET_ALL_USER_SAGA, getAllUserSaga);
}



function* getAllCommentSaga(action) {
     // ! xử lý loading
    yield put({
        type: DISPLAY_LOADING
    })
    try {
        let { data, status } = yield call(() => (
            // userService.getAllUser()
            commentService.getAllComment()
            ));
        if (status === STATUS_CODE.SUCCESS) {
            yield put({
                type: GET_ALL_COMMENT,
                commentData: data
            })
        } else {
            // ! do something
            console.log("err");
        }

    }
    catch (err) {
        console.log("err");
    }
    yield put({
        type: HIDE_LOADING
    })

}


export function* theoDoiGetAllComment() {
    // ! lắng nghe dispatch từ component
    yield takeLatest(GET_ALL_COMMENT_SAGA, getAllCommentSaga);
}
function* getDetailPostSaga({id}) {
    // ! xử lý loading
   yield put({
       type: DISPLAY_LOADING
   })
   try {
       let { data, status } = yield call(() => (
           // userService.getAllUser()
           
           postService.getDetailPost(id)
           ));
       if (status === STATUS_CODE.SUCCESS) {
           yield put({
               type: GET_DETAIL_POST,
               postDetail: data
           })
       } else {
           // ! do something
           console.log("err");
       }

   }
   catch (err) {
       console.log("err");
   }
   yield put({
       type: HIDE_LOADING
   })
}


export function* theoDoiGetDetailPostSaga() {
   // ! lắng nghe dispatch từ component
   yield takeLatest(GET_DETAIL_POST_SAGA, getDetailPostSaga);
}
function* getCommentSaga({id}) {
    // ! xử lý loading
   yield put({
       type: DISPLAY_LOADING
   })
   try {
       let { data, status } = yield call(() => (
           // userService.getAllUser()
           postService.getCommentPost(id)
           ));
       if (status === STATUS_CODE.SUCCESS) {
           yield put({
               type: GET_COMMENT,
               comments: data
           })
       } else {
           // ! do something
           console.log("err");
       }

   }
   catch (err) {
       console.log("err");
   }
   yield put({
       type: HIDE_LOADING
   })
}

export function* theoDoiGetCommentsSaga() {
   // ! lắng nghe dispatch từ component
   yield takeLatest(GET_COMMENT_SAGA, getCommentSaga);
}
