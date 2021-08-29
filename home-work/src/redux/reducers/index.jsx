import { combineReducers } from 'redux';
import homepageReducer from './homepageReducer'

export default combineReducers({
  homepage: homepageReducer,
})