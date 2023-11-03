import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import { PersistGate } from 'redux-persist/integration/react'
import store, { persistor } from './store'
import routes from './routes'
import './App.css'

function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <RouterProvider router={routes} />
                <ToastContainer />
            </PersistGate>
        </Provider>
    )
}

export default App
