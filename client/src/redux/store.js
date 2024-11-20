import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import reducer from './reducer'
import mySaga from './sagas'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['reducer']
}

const rootReducer = combineReducers({ reducer });
const persistedReducer = persistReducer(persistConfig, rootReducer)

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Mount it on the Store
const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
)

// Then run the saga
sagaMiddleware.run(mySaga)

export default store;
export const persistor = persistStore(store);