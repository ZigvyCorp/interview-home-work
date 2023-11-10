import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import userSlice from './userSlice'
import postsSlice from './postsSlice'
import createSagaMiddleware from 'redux-saga'
import { mySaga } from './saga'

const sagaMiddleware = createSagaMiddleware()

const persistConfig = {
  key: 'user',
  storage,
}

// use redux persist to persist user data on local storage
const persistedUserReducer = persistReducer(persistConfig, userSlice)

const rootReducer = combineReducers({
  user: persistedUserReducer,
  posts: postsSlice,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({ thunk: false }),
    sagaMiddleware,
  ],
})
sagaMiddleware.run(mySaga)

export const persistor = persistStore(store)
