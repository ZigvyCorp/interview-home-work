import actionTypes from "../actions/actionTypes";

const initialState = {
    posts: [],
    loading: false,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case actionTypes.GET_POSTS:
            return {
                ...state,
                loading: true,
            };
        case actionTypes.GET_POSTS_SUCCESS:
            return {
                ...state,
                posts: action.payload,
                loading: false,
            };
        case actionTypes.GET_POSTS_FAIL:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
}
