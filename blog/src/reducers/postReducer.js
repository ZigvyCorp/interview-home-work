import actionTypes from "../actions/actionTypes";

const initialState = {
    post: {},
    loading: false,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case actionTypes.GET_POST:
            return {
                ...state,
                loading: true,
            };
        case actionTypes.GET_POST_SUCCESS:
            return {
                ...state,
                post: action.payload,
                loading: false,
            };
        case actionTypes.GET_POST_FAIL:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
}
