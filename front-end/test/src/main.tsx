import React from 'react'
import App from 'src/App'
import './index.css'
import 'src/i18n/i18n'
import { store } from './store/store'
import { Provider } from 'react-redux'
import { AppProvider } from './contexts/app.context'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </AppProvider>
    </BrowserRouter>
  </React.StrictMode>
)
