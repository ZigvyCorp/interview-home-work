
//Redux-Saga
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import rootSaga from './saga/index'
import reducer from './reducers/index'

const persistConfig = {
    key: 'root',
    storage,
  }

  
const persistedReducer = persistReducer(persistConfig, reducer)


const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    persistedReducer,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store)

export default store;