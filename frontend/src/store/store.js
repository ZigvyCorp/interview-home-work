import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import {reducer} from './reducers'
import rootSaga from './saga'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// mount it on the Store
export const store = configureStore({
  reducer, 
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
})

// then run the saga
sagaMiddleware.run(rootSaga)
