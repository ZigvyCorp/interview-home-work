import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'

import reducer from './reducer'
import mySaga from './sagas'

const rootReducer = combineReducers({ reducer });
// Create the saga middleware
const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Mount it on the Store
const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
)

// Then run the saga
sagaMiddleware.run(mySaga)

export default store;