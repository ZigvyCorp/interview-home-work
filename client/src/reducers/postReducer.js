import {GET_ALL_POSTS_SUCCESS,
    GET_POST_BY_ID_SUCCESS,
    GET_COMMENT_OF_POST_SUCCESS} from '../actions/actionCreator';

const initState = {
        postList:[],
        postDetail:{
            id:0,
            owner:0,
            title:"",
            content:"",
            create_at: 1576506719083,
            tags:[]
        },
        comment:[{
            id: 1,
            owner: 1,
            post: 1,
            content: "Boring!!!",
            created_at: 1576506719083
        }],
    };

const postReducer = (state = initState,action)=>{
    switch(action.type){
        case GET_ALL_POSTS_SUCCESS:
            return {
                ...state,
                postList:[...action.payload]
            };
        case GET_POST_BY_ID_SUCCESS:
            return {
                ...state,
                postDetail:{...action.payload}
            };
        case GET_COMMENT_OF_POST_SUCCESS:
            return {
                ...state,
                comment:[...action.payload]
            };
        default:
            return state;
    }
};

export default postReducer;