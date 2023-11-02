import { SET_POSTS } from '../constants/actionTypes'

const initialState = {
    posts: [],
};

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POSTS:
            return {
                ...state,
                posts: action.payload,
            };
        default:
            return state;
    }
};

export default postReducer;
