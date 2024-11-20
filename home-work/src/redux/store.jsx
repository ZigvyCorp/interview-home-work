import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers';
import rootSaga from './sagas';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
const middleWares = [sagaMiddleware];

const initialState = {};

// dev tools middleware
const applyMW = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() ? compose(
  applyMiddleware(...middleWares),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
) : applyMiddleware(...middleWares);

// create a redux store with our reducer above and middleware
export default createStore(
  rootReducer,
  initialState,
  applyMW
)

// run the saga
sagaMiddleware.run(rootSaga);