import  {combineReducers} from 'redux';
import post from './postReducer';

const rootReducers = combineReducers({post});
export default rootReducers;