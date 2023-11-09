import { useContext } from 'react'
import { Navigate, Outlet, useRoutes } from 'react-router-dom'

import PATH from '~/constants/path'
import MainLayout from '~/layouts/MainLayout'
import Home from '~/pages/Home'
import Login from '~/pages/Login'
import NotFound from '~/pages/NotFound'
import Register from '~/pages/Register'
import { AppContext } from '~/providers/AppProvider/AppProvider'

// const ProtectedRoute = () => {
//   const { isAuthenticated } = useContext(AppContext)
//   return isAuthenticated ? <Outlet /> : <Navigate to={PATH.LOGIN} />
// }

// eslint-disable-next-line react-refresh/only-export-components
const RejectedRoute = () => {
  const { isAuthenticated } = useContext(AppContext)
  return !isAuthenticated ? <Outlet /> : <Navigate to={PATH.HOME} />
}

const useElement = () => {
  const element = useRoutes([
    {
      path: PATH.HOME,
      element: (
        <MainLayout>
          <Home />
        </MainLayout>
      )
    },
    {
      path: PATH.NOT_FOUND,
      element: (
        <MainLayout>
          <NotFound />
        </MainLayout>
      )
    },
    {
      path: '/',
      element: <RejectedRoute />,
      children: [
        {
          path: PATH.LOGIN,
          element: (
            <MainLayout>
              <Login />
            </MainLayout>
          )
        },
        {
          path: PATH.REGISTER,
          element: (
            <MainLayout>
              <Register />
            </MainLayout>
          )
        }
      ]
    }
  ])
  return element
}

export default useElement
