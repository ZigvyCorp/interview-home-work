import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import { connectRouter } from 'connected-react-router'

import { ReduxPersistConfig } from '../../config'
import history from '../../history'
import { LanguageReducer } from './language'
import { UserReducer } from './user'
import { PostReducer } from './post'

let finalRootReducer = combineReducers({
  router: connectRouter(history),
  language: LanguageReducer,
  user: UserReducer,
  post: PostReducer,
})

if (ReduxPersistConfig.active) {
  finalRootReducer = persistReducer(ReduxPersistConfig.config, finalRootReducer)
}

export default finalRootReducer
