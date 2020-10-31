import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './rootReducer';
import createRootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();
const rootSaga = createRootSaga();
sagaMiddleware.run(rootSaga);

const initialState = {};
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore() {
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(sagaMiddleware)
  );

  return store;
}
