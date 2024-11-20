import {createStore} from 'redux'
import { rootReducer } from './rootReducer'
import {configureStore} from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './rootSaga'
// export const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const sagaMiddleware = createSagaMiddleware()
export const store = configureStore({
    reducer:rootReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware)
    
    
})
sagaMiddleware.run(rootSaga)