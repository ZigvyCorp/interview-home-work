import * as Types from "../action/actionType"

const initialState = {
    data: undefined
}

const comments = (state = initialState, action) => {
    switch (action.type){
        case Types.FETCH_COMMENTS_SUCCESS:
            return {data: action.data};
            break;
        case Types.FETCH_COMMENTS_ERROR:
            return {data: undefined};
            break;
        default:
            return state;
    }
}

export default comments