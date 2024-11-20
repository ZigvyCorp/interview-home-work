import * as Actiontype from '../constants/action-type';

let initialState = {
    listPosts: [],
}

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case Actiontype.GET_POSTS: {
            state.listPosts = action.listPosts;
            return { ...state };
        }
        default:
            return { ...state }
    }
}

export default postReducer;