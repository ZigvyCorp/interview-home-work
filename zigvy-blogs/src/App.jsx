import React from 'react'
import 'antd/dist/antd.css'
import PrimaryLayout from './layout/PrimaryLayout'
import { Provider } from 'react-redux'
import { store, persistor} from './store'
import { PersistGate } from 'redux-persist/integration/react'

class App extends React.Component {
  render() {
    return (
      <React.StrictMode>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <PrimaryLayout/>
          </PersistGate>
        </Provider>
      </React.StrictMode>
    )
  }
}

export default App;