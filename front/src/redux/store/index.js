import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer, persistStore } from 'redux-persist'
import { createBlacklistFilter } from 'redux-persist-transform-filter'
import storage from 'redux-persist/lib/storage'
import createSagaMiddleware from 'redux-saga'
import postsReducer from '../features/postSlice'
import rootSaga from '../sagas'

const sagaMiddleware = createSagaMiddleware()

const persistConfig = {
	key: 'root',
	version: 1,
	whitelist: ['posts'],
	storage,
	transforms: [createBlacklistFilter('posts', ['loading', 'error'])],
}

const appReducer = combineReducers({
	posts: postsReducer,
})

const persistedReducer = persistReducer(persistConfig, appReducer)

const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}).concat(sagaMiddleware),
})

sagaMiddleware.run(rootSaga)

export default store
export const persistor = persistStore(store)
