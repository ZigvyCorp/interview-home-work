import { actionTypes } from './actions';

const initialState = {
    data: []
}

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.RECEIVE_ALL_POST:
            return {
                ...state,
                data: action.payload,
            }
        default:
            return state;
    }
}

export default postReducer;