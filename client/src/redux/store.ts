import createSagaMiddleware from 'redux-saga'
import { configureStore } from '@reduxjs/toolkit'
import { persistStore } from 'redux-persist'
import rootSaga from './rootSaga'
import persistedReducer from './persistConfig'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(sagaMiddleware),
})

export const persistor = persistStore(store)

sagaMiddleware.run(rootSaga)

export type AppDispatch = typeof store.dispatch
export type AppState = ReturnType<typeof store.getState>
