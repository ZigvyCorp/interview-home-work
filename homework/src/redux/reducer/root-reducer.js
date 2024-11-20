import { combineReducers } from 'redux';
import postReducer from './post-reducer'
import commentReducer from './comment-reducer'

const rootReducer = combineReducers({
    postReducer,
    commentReducer
})

export default rootReducer;