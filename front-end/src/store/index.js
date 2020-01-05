import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import { generateSaga } from '../sagas'
import rootReducer from '../reducers'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
	rootReducer,
	applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(generateSaga)

export default store