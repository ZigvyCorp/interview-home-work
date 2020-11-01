import { takeLatest, all } from "redux-saga/effects";


import { GET_ALL_POSTS_REQUEST,
     GET_POST_DETAIL_REQUEST,
     ADD_NEW_POST_REQUEST ,
     GET_USERS_REQUEST,
     GET_COMMENTS_REQUEST,
     SEARCH_POST_REQUEST
} from '../actions/ActionsType'

import { getAllPostRequest, 
    getPostDetailRequest,
    addNewPostRequest,
    searchPostRequest
} from './PostSaga'

import { getAllUsers } from './UserSaga'
import { getCommentsRequest } from './CommentSaga'

export default function* root() {
    yield all([
        takeLatest(GET_ALL_POSTS_REQUEST, getAllPostRequest),
        takeLatest(GET_POST_DETAIL_REQUEST, getPostDetailRequest),
        takeLatest(ADD_NEW_POST_REQUEST, addNewPostRequest),
        takeLatest(GET_USERS_REQUEST, getAllUsers),
        takeLatest(GET_COMMENTS_REQUEST, getCommentsRequest),
        takeLatest(SEARCH_POST_REQUEST, searchPostRequest),
    ])
}