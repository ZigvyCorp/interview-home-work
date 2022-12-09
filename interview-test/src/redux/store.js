import {configureStore} from '@reduxjs/toolkit'
import postsReducer from './posts.js'
export default configureStore({
    reducer: {
        posts: postsReducer,
    }
})