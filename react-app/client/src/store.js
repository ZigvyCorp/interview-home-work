import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk' //Middleware
import appReducer from './reducers'

const store = createStore(appReducer,applyMiddleware(thunk));

export default store;