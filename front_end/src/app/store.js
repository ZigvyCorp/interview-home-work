import { createStore, applyMiddleware  } from 'redux';
import { useSelector as useAppSelector, useDispatch as useAppDispatch } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';
import rootReducer from './rootReducer';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

const persistor = persistStore(store);

const { dispatch } = store;

const useSelector = useAppSelector;

const useDispatch = () => useAppDispatch();

sagaMiddleware.run(rootSaga);

export { store, persistor, dispatch, useSelector, useDispatch };
