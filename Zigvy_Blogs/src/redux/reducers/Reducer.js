import { combineReducers } from 'redux';
import loginReducer from './loginReducers/loginReducer';
import signupReducer from './loginReducers/signupReducer';
import blogReducer from './blogReducers/homeBlogReducer'

const RootReducer = combineReducers({
    signupReducer,
    loginReducer,
    blogReducer
})

export default RootReducer