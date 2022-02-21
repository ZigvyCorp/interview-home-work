import { GET_COMMENT_SUCCESS, GET_COMMENT_WITH_ID_SUCCESS, GET_POST_DETAIL, GET_POST_DETAIL_SUCCESS, GET_POST_SUCCESS, GET_USER_SUCCESS } from "../type/postType";

const initialState = {
    posts: [],
    postDetail: {
        userId: 0,
        id: 0,
        title: "",
        body: "",
        comments:[]
    },
    users: [],
    comments: []
}

const postReducer = (state = initialState, action)=>{
    const {type,payload} = action;
    switch(type){
        case GET_POST_SUCCESS:
            if(Array.isArray(payload)){
                return{
                    ...state,
                    posts:[...payload]
                }
            }
            return {
                ...state,
                posts:[...state.posts, payload]
            }
        case GET_POST_DETAIL:
            return {
                ...state,
                postDetail: {
                    userId: 0,
                    id: 0,
                    title: "",
                    body: "",
                    comments:[]
                },
            }
        case GET_POST_DETAIL_SUCCESS:
            return {
                ...state,
                postDetail:payload
            }
        case GET_COMMENT_SUCCESS:
            return {
                ...state,
                comments:payload
            }
        case GET_USER_SUCCESS:
            return {
                ...state,
                users: payload
            }
        case GET_COMMENT_WITH_ID_SUCCESS:
            const newPosts = state.posts.map(post => {
                if(post.id === payload.id){
                    console.log("hello")
                    post.comments = payload.comment
                }
                return post;
            });
            
            return {
                ...state,
                posts:newPosts
            }
        default:
            return state;
    }
}
export default postReducer