import { combineReducers, createStore } from "redux"
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { postsReducer } from "./reducerPosts"
// import { commentsReducer } from "./reducerComments"
// import { usersReducer } from "./reducerUsers"

const persistConfig = {
    key: 'root',
    storage,
}


const rootReducer = combineReducers({
    posts: postsReducer,
    // users: usersReducer,
    // comments: commentsReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

export const store = createStore(persistedReducer, composeEnhancers())
export const persistor = persistStore(store)