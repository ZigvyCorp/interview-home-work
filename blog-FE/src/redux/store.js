import rootSaga from './rootSaga'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import createSagaMiddleware from 'redux-saga'

import postReducer from './post/postSlice'
import searchReducer from './post/search'
import pageReducer from './post/postPage'

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
  posts: postReducer,
  search: searchReducer,
  page: pageReducer
})

const persistConfig = {
  key: 'root',
  storage,
  version: 1
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(sagaMiddleware)
})

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store)
