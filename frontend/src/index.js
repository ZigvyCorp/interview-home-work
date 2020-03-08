import React from 'react'
import ReactDOM from 'react-dom'
import { Provider as ReduxProvider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { Spin } from 'antd'

import App from './App'
import LanguageProvider from './containers/LanguageProvider'
import history from './history'
import createStore from './store'
import { translationMessages } from './i18n'

import './index.css'
import 'antd/dist/antd.css'
import 'bootstrap/dist/css/bootstrap.css'
import * as serviceWorker from './serviceWorker'

const preloadedState = {}
const { store, persistor } = createStore(preloadedState, history)
const MountNode = document.getElementById('app')

const render = messages =>
  ReactDOM.render(
    <ReduxProvider store={store}>
      <LanguageProvider messages={messages}>
        <ConnectedRouter history={history}>
          <PersistGate loading={<Spin />} persistor={persistor}>
            <App />
          </PersistGate>
        </ConnectedRouter>
      </LanguageProvider>
    </ReduxProvider>,
    MountNode,
  )

if (module.hot) {
  module.hot.accept(['./App'], () => {
    ReactDOM.unmountComponentAtNode(MountNode)
    render(translationMessages)
  })
}

if (!window.Intl) {
  //
} else {
  render(translationMessages)
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
