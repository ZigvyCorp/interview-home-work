import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import rootSaga from './saga';

const devTools =
  process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()
    : null;

const sagaMiddleware = createSagaMiddleware();

const middleware = [];

middleware.push(applyMiddleware(sagaMiddleware));

if (devTools) {
  middleware.push(devTools);
}

const store = createStore(reducers, compose(...middleware));

sagaMiddleware.run(rootSaga);

export default store;
