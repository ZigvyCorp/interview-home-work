import {combineReducers} from 'redux'

import posts from './posts'
import users from './users'
import comments from './comments'
import postDetail from './postDetail'

const reducer = combineReducers({
    posts, users, comments, postDetail
})

export default reducer;