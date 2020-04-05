import userReducer from './userReducer'
import { combineReducers} from 'redux'
import postReducer from './postReducer';

 const reducers = combineReducers({
    user: userReducer,
    post:postReducer,
  });

  export default reducers;