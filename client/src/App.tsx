import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Fragment, useContext, useEffect } from 'react'
import { ToastContainer } from 'react-toastify'

import useElement from '~/hooks/useElement'
import { AppContext } from '~/providers/AppProvider/AppProvider'
import { localStorageEventTarget } from '~/utils/storage'

function App() {
  const element = useElement()
  const { resetAuth } = useContext(AppContext)

  // Xóa dữ liệu đăng nhập khi đăng xuất
  useEffect(() => {
    localStorageEventTarget.addEventListener('clearLS', resetAuth)
    return () => {
      localStorageEventTarget.removeEventListener('clearLS', resetAuth)
    }
  }, [resetAuth])

  return (
    <Fragment>
      {element}
      <ReactQueryDevtools initialIsOpen={false} />
      <ToastContainer autoClose={3000} position='bottom-center' />
    </Fragment>
  )
}

export default App
