import { createStore, compose, applyMiddleware } from 'redux'
import { persistStore } from 'redux-persist'
import createSagaMiddleware from 'redux-saga'
import { routerMiddleware } from 'connected-react-router'

import { AppConfig } from '../config'
import rootReducer from './redux'
import rootSaga from './sagas'
import createApi from '../services'

export default (preloadedState = {}, history) => {
  let composeEnhancers = compose

  if (!AppConfig.isProd && AppConfig.isBrowser && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  }

  const sagaMiddleware = createSagaMiddleware()

  const middlewares = [sagaMiddleware, routerMiddleware(history)]

  const enhancers = [applyMiddleware(...middlewares)]

  const store = createStore(rootReducer, preloadedState, composeEnhancers(...enhancers))

  const persistor = persistStore(store)

  const api = createApi({ baseUrl: AppConfig.baseUrl, timeout: 30000 })

  const task = sagaMiddleware.run(rootSaga, api)

  if (module.hot) {
    module.hot.accept(() => {
      store.replaceReducer(require('./redux').default)

      task.cancel()
      task.done.then(() => {
        task = sagaMiddleware(require('./sagas').default)
      })
    })
  }

  return { store, persistor }
}
