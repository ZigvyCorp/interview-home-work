import { createBrowserRouter } from 'react-router-dom'
import Posts from '../pages/Posts'
import PostDetail from '../pages/PostDetail'
import Layout from '../components/templates/Layout'
import ErrorBoundary from '../components/molecules/ErrorBoundary'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorBoundary />,
        children: [
            {
                path: '/',
                element: <Posts />,
            },
            {
                path: '/:id',
                element: <PostDetail />,
            },
        ],
    },
])

export default router
