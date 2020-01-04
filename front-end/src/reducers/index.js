import { combineReducers } from 'redux'

import { commentsReducer } from './comments'
import { postsReducer } from './posts'
import { usersReducer } from './users'

const rootReducer = combineReducers({
	comments: commentsReducer,
	posts: postsReducer,
	users: usersReducer,
})

export default rootReducer