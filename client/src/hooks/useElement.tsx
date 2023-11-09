import { useRoutes } from 'react-router-dom'

import PATH from '~/constants/path'
import MainLayout from '~/layouts/MainLayout'
import Home from '~/pages/Home'
import NotFound from '~/pages/NotFound'

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
    }
  ])
  return element
}

export default useElement
