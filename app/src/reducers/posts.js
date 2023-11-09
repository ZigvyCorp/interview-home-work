import * as actions from "../actions";
import { get, concat } from "lodash";

const initialState = {
    data: [],
    loading: false,
}

const postsReducers = (state = initialState, action) => {
    const pl = action.payload || {}
    switch (action.type) {
        case actions.FETCH_POSTS_REQUEST:
            return {
                ...state,
                search: pl.search,
                loading: true
            }
        case actions.FETCH_POSTS_DONE:
            const newData = pl.loadMore ? concat(state.data, pl.posts) : pl.posts
            console.log('newData', pl)
            return {
                ...state,
                data: newData,
                hasNext: pl.hasNext,
                loading: false
            }
        default:
            return state
    }
}

export default postsReducers
