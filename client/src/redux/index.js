import { combineReducers } from 'redux'

import { loadingReducer as loading } from '../utils/api'
import { errorReducer as error } from '../utils/api'

import home from '../pages/home/redux'
import write_post from '../pages/write_post/redux'

const appReducer = combineReducers({
  loading,
  error,
  home,
  write_post,
})

export default appReducer
