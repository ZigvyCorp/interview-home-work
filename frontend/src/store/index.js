import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import Reducer from '../reducers/index';

const reducer = Reducer;

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,composeEnhancer(applyMiddleware(thunk)));
export default store;