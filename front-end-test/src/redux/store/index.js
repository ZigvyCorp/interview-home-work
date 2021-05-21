import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import PostsReducer from './reducers/posts'
import createSagaMiddleware from 'redux-saga'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { watcherSaga } from '../saga/rootSaga';

const rootReducer = combineReducers({
    posts: PostsReducer
})

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

// redux dev tools in chrome
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware]
const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(...middlewares)))
export const persistor = persistStore(store)

sagaMiddleware.run(watcherSaga)

export default store