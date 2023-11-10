import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import 'antd/dist/reset.css'
import './index.css'
import Root from './routes/Root.tsx'
import Error from './pages/Error.tsx'
import Home from './pages/Home.tsx'
import Detail from './pages/Detail.tsx'
import { Provider } from 'react-redux'
import { store, persistor } from './redux/store.ts'
import { PersistGate } from 'redux-persist/integration/react'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: ':postId',
        element: <Detail />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>
)
