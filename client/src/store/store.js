import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import {variableConstants} from '../constants/variable.constants';


const loggerMiddleware = createLogger();


export const store = (variableConstants.LOG_DEV_TEXT) ? createStore(
    rootReducer,composeWithDevTools(applyMiddleware(thunkMiddleware, loggerMiddleware))
) :
    createStore(rootReducer, applyMiddleware(thunkMiddleware));