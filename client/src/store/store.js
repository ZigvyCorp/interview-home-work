import {createStore, applyMiddleware,compose } from 'redux';
import rootReducer from '../reducers/rootReducer';
import createSagaMiddleware from 'redux-saga';
import {rootSaga} from '../saga/rootSaga.js';

// const composeEnhancers =
//   typeof window === 'object' &&
//   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//       // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
//     }) : compose;

// const enhancer = composeEnhancers(
// //   applyMiddleware(thunk),
//   // other store enhancers if any
// );

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer,applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;