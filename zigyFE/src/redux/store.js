
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import rootSaga from './sagas/rootSaga';
import reducers from './reducers';
import createSagaMiddleware from 'redux-saga';
import { createStore, compose, applyMiddleware } from 'redux';
/**Config redux persist */
const persistConfig = {
 key: 'root',
 storage: storage,
 stateReconciler: autoMergeLevel2 // Xem thêm tại mục "Quá trình merge".
};
const pReducer = persistReducer(persistConfig, reducers);

/** Saga Middleware */
const sagaMiddleware = createSagaMiddleware();
// Create saga middleware and config using redux devtool
const composeEnhancers =  typeof window === 'object' && window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] ? 
      window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']({ }) : compose;
      const enhancer = composeEnhancers(
        applyMiddleware(sagaMiddleware /*other middleware*/),
        /* other store enhancers if any */
      );
export const store = createStore(pReducer, enhancer);
/** run saga watchers */
sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store);