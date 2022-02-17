import { GET_COMMENTS } from "../actions/const";

const initialState = {
    comments: [],
    comment: ''
}

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COMMENTS:
            return {
                ...state,
                comments: action.payload
            }
        default:
            return state
    }
}

export default postReducer;