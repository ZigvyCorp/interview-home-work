import { combineReducers } from 'redux';
import PostReducer from '../store/Post/PostReducer'

const rootReducer = combineReducers({
    PostReducer,
})

export default rootReducer;