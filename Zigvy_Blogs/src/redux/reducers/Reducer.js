import { combineReducers } from 'redux';
import loginReducer from './loginReducers/loginReducer';
import signupReducer from './loginReducers/signupReducer';

const RootReducer = combineReducers({
    signupReducer,
    loginReducer
})

export default RootReducer