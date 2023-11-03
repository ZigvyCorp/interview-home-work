import { SEARCH_SUCCESS } from './types';
const initialState = {
    keyword: null,
}

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_SUCCESS: {
            state.keyword = action.payload;
            return { ...state }
        }
        default: return { ...state };
    }
}

export default searchReducer;