import { GET_LIST_POST, GET_LIST_POST_SUCCESS,GET_POST,GET_POST_SUCCESS } from "./postConstant";

const INITIAL_STATE={
    posts:[],
    post:{},
    load:false,
    total:0
}

const postsReducer = (state = INITIAL_STATE, action) => {
    
    switch (action.type) {
        case GET_LIST_POST:
            return {
                ...state,
                load: true,
            };
        case GET_LIST_POST_SUCCESS:
            const { elements,total } = action.payload;
            return {
                ...state,
                posts: elements,
                load: false,
                total:total
            };
        case GET_POST:
            return {
                ...state,
                load: true,
            };
        case GET_POST_SUCCESS:
            return {
                ...state,
                post: action.payload.elements,
                load: false,
            };
        default:
            return state;
    }
};

export default postsReducer;
