import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './pages/ErrorPage'
import HomePage from './pages/HomePage'
import PostDetailPage from './pages/PostDetailPage'
import Layout from './components/Layout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'posts/:postId',
    element: <PostDetailPage />,
  },
])

const App = () => {
  return (
    <div>
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </div>
  )
}

export default App
