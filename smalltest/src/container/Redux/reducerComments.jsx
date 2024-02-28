import { Types } from "./type.jsx";

const initialState = {
    comments: [{}]
}

export const commentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.loadComments: {
            return {
                comments: [...state.comments, action.payload]
            }
        }
        default:
            return state
    }
}