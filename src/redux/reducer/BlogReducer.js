import { GET_POST_DETAIL, GET_POST_LIST } from "../constants/BlogConstant";

const initialState = {
    arrPost: [],
    postDetail:{},
}

const BlogReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POST_LIST: {
            return {...state, arrPost:action.arrPost}
        }
        case GET_POST_DETAIL:{
            return {...state, postDetail:action.postDetail}
        }

        default:
            return state
    }
}
export default BlogReducer;