import {createStore, applyMiddleware} from 'redux';
import {createEpicMiddleware} from 'redux-observable';

import RootReducer from './reducers/Reducer'
import RootEpic from './epics/Epic';

const epicMiddleware = createEpicMiddleware();
const enhancer = applyMiddleware(epicMiddleware);
const Store = createStore(RootReducer, enhancer);
epicMiddleware.run(RootEpic);
export default Store;