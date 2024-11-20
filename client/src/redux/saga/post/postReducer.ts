import { GET_POST, GET_POSTS, GET_POST_COMMENTS } from "../action";
import { IPost, IPostComment } from "./model";

interface IPostAction {
    type: string
    posts: IPost[]
    post: IPost
    postComments: IPostComment[]
}

const createEmty = () => {
    return {
        posts: [] as IPost[],
        post: {} as IPost,
        postComments: [] as IPostComment[]
    }
}

export const postReducer = (state = createEmty(), action: IPostAction) => {
    switch (action.type) {
        case GET_POSTS:
            return { ...state, posts: action.posts }
        case GET_POST: 
        return { ...state, post: action.post }
        case GET_POST_COMMENTS: {
            return { ...state, postComments: action.postComments }
        }
        default:
            return state
    }
}