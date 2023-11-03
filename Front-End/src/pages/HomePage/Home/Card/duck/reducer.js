import { LIST_POST_FAIL, LIST_POST_SUCCESS, LIST_POST_REQUEST } from './types';
const initialState = {
    loading: false,
    data: null,
    error: null,
}

const postsCardsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LIST_POST_REQUEST: {
            state.loading = true;
            state.data = null;
            state.error = null;
            return { ...state }
        }
        case LIST_POST_SUCCESS: {
            state.loading = false;
            state.data = action.payload;
            state.error = null;
            return { ...state }
        }
        case LIST_POST_FAIL: {
            state.loading = false;
            state.data = null;
            state.error = action.payload;
            return { ...state }
        }
        default: return { ...state };

    }
}

export default postsCardsReducer;