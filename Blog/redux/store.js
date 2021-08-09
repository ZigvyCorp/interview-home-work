import {createStore, combineReducers,applyMiddleware} from 'redux'
import Reducer from './reducers'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage'

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
  }

const reducer = combineReducers({
    todo: Reducer
}
);

const asyncMiddleware = store => next => action =>{
    if(typeof action === 'function'){
        return action(next);
    }
    else{
        return next(action);
    }
    
}

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(persistedReducer,applyMiddleware(asyncMiddleware));
export const persistor = persistStore(store);
export default store;