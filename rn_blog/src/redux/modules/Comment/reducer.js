import { actionTypes } from './actions';

const initialState = {
    data: []
}

const commentReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.RECEIVE_ALL_COMMENT:
            return {
                ...state,
                data: action.payload,
            }
        default:
            return state;
    }
}

export default commentReducer;