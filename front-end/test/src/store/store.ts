import createSagaMiddleware from '@redux-saga/core'
import { configureStore } from '@reduxjs/toolkit'
// import { createLogger, logger } from "redux-logger";
import reducer from './slices'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { rootSaga } from './saga/rootSaga'

// ...

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['blacklist', 'modal']
}

const persistedReducer = persistReducer(persistConfig, reducer)

const middleware: any[] = []
const sagaMiddleware = createSagaMiddleware()
middleware.push(sagaMiddleware)

// if (process.env.NODE_ENV !== "production") {
//   middleware.push(createLogger());
// }

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }).concat(middleware)
})

// eslint-disable-next-line prefer-const
export let persistor = persistStore(store)

sagaMiddleware.run(rootSaga)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
