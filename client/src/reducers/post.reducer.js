import {postConstants} from '../constants/post.constants'


export default (state = {loading: true, posts: {}}, action) => {
    switch(action.type)
    {
        case postConstants.GET_POSTS: return {...state, 
            loading: false,
            posts: action.data
        }; break;
        case postConstants.CLEAR_DATA: return {...state, 
            loading: true,
            posts: {}
        }; break;
        
        default: return state;
    }
};

