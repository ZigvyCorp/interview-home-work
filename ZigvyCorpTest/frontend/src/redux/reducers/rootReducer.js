import { combineReducers } from 'redux';
import postReducers from './postReducers';
const rootReducer = combineReducers({
    postStates: postReducers,
});
export default rootReducer;
