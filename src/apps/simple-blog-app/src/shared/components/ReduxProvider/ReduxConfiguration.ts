import { Store, createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/es/storage';
import { composeWithDevTools } from 'redux-devtools-extension';
import { watcherSaga } from '../../redux/saga';
export type ReduxConfig = {
  initialState: any,
  rootReducer: any,
}

export function configureStore(config: ReduxConfig): Store {
  const { initialState, rootReducer } = config;

  // Redux-Persist
  const rootPersistReducer = persistReducer(
    {
      key: 'root',
      storage,
    },
    rootReducer
  );

  // Saga
  const sagaMiddleware = createSagaMiddleware()
  const middleWares = [ sagaMiddleware ].filter(Boolean);

  const composeEnhancers = composeWithDevTools({}) || compose;
  const store: Store = createStore(
    rootPersistReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middleWares))
  );
  sagaMiddleware.run(watcherSaga);
  return store;
}
