import { GET_POSTS } from "../actions/const";

const initialState = {
    posts: [],
    post: ''
}

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                posts: action.payload
            }
        default:
            return state
    }
}

export default postReducer;