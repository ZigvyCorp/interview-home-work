import { createStore,applyMiddleware } from 'redux';
import rootReducers from './reducers/index';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga/index';
import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware();

const configStore = () =>{
  const store = createStore(rootReducers,composeWithDevTools(
   applyMiddleware(sagaMiddleware)));
  sagaMiddleware.run(rootSaga);
  return store;
}

export default configStore;