import * as Types from "../action/actionType"

const initialState = {
    data: undefined
}

const posts = (state = initialState, action) => {
    switch (action.type){
        case Types.FETCH_POSTS_SUCCESS:
            return {data: action.data};
            break;
        case Types.FETCH_POSTS_ERROR:
            return {data: undefined};
            break;
        default:
            return state;
    }
}

export default posts