import path from 'src/constants/path'
import { lazy, Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'

const Home = lazy(() => import('./pages/Home'))
const NotFound = lazy(() => import('./pages/NotFound'))

export default function useRouteElements() {
  const routeElements = useRoutes([
    {
      path: '',
      element: <MainLayout />,
      children: [
        {
          path: path.home,
          element: (
            <Suspense>
              <Home />
            </Suspense>
          )
        },
        {
          path: path.post,
          element: (
            <Suspense>
              <Home />
            </Suspense>
          )
        },
        {
          path: '*',
          element: (
            <Suspense>
              <NotFound />
            </Suspense>
          )
        }
      ]
    }
  ])
  return routeElements
}
