import * as Actiontype from '../constants/action-type';

let initialState = {
    listComments: [],
}

const commentReducer = (state = initialState, action) => {
    switch (action.type) {
        case Actiontype.GET_COMMENTS: {
            state.listComments = action.listComments;
            return { ...state };
        }
        default:
            return { ...state }
    }
}

export default commentReducer;