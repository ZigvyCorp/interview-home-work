import {postConstants} from '../constants/post.constants'


export default (state = {loading: true, posts: {}, create_post: {loading: false, status: null}}, action) => {
    switch(action.type)
    {
        case postConstants.GET_POSTS: return {...state, 
            loading: false,
            posts: action.data
        }; break;
        case postConstants.CREATE_POST: return {...state, 
            create_post: {loading: false, status: action.status}
        }; break;
        case postConstants.CREATE_POST_PENDING: return {...state, 
            create_post: {loading: true, status: null}
        }; break;
        case postConstants.CLEAR_DATA: return {...state, 
            loading: true,
            posts: {}
        }; break;
        
        default: return state;
    }
};

