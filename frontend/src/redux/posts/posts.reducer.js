import { handleActions } from "redux-actions";
import {getPostsSucceedAction, getUsersSucceedAction, getCommentsSucceedAction, getPostDetailSucceedAction} from "./posts.action"

export const initialPostState = {
    posts: [],
    postDetail: {
        userId: 0,
        id: 0,
        title: "",
        body: ""
    },
    users: [],
    comments: []
}

export const postsReducer = handleActions(
    new Map([
        [
            getPostsSucceedAction,
            (state, action) => ({
                ...state,
                posts: action.payload
            })
        ],
        [
            getCommentsSucceedAction,
            (state, action) => ({
                ...state,
                comments: action.payload
            })
        ],
        [
            getUsersSucceedAction,
            (state, action) => ({
                ...state,
                users: action.payload
            })
        ],
        [
            getPostDetailSucceedAction,
            (state, action) => ({
                ...state,
                postDetail: action.payload
            })
        ]
    ]),
    initialPostState
)