
import * as ACTION from '../constants/constants';
const stateDefault = {
    postList: [],
    loading: true,
    searchContent: '',

}

const PostReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case ACTION.UPDATE_POST: {

            return { ...state,  postList: [ ...action.payload ] }
        }
        case ACTION.SET_LOADING: {
            return { ...state,  loading: action.payload }
        }
        case ACTION.SET_SEARCH_POST: {
            return { ...state,  searchContent: action.payload }
        }
   
        default:
          
    }
    return { ...state }





}


export default PostReducer;