import * as actions from "../actions";
import { get, concat } from "lodash";

const initialState = {
}

const commentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.FETCH_COMMENTS_REQUEST:
            return {
                ...state,
                [action.payload.postId]: {
                    data: get(state, [action.payload.postId, 'data'], []),
                    loading: true,
                    hasNext: get(state, [action.payload.postId, 'hasNext'], true)
                }
            }
        case actions.FETCH_COMMENTS_DONE:
            const { postId, comments, hasNext } = action.payload || {}
            return {
                ...state,
                [postId]: {
                    data: concat(get(state, [postId, 'data'], []), comments),
                    loading: false,
                    hasNext
                }
            }
        case actions.CLEAR_COMMENTS:
            return {
                ...state,
                [action.payload]: {
                    data: [],
                    loading: false,
                }
            }
        default:
            return state
    }
}

export default commentsReducer;