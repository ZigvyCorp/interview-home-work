import { actionTypes } from './actions';

const initialState = {
    data: []
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.RECEIVE_ALL_USER:
            return {
                ...state,
                data: action.payload,
            }
        default:
            return state;
    }
}

export default userReducer;