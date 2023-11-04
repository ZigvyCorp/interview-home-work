import { createBrowserRouter } from 'react-router-dom'
import Homepage from './components/homepage/Homepage'
import Blog from './components/blog/Blog'
import Account from './components/account/Account'
import PostDetailPage from './components/postDetailPage/PostDetailPage'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Homepage />,
        children: [
            {
                path: '/blog',
                element: <Blog />
            },
            {
                path: '/account',
                element: <Account />
            },
            {
                path: 'post-detail',
                element: <PostDetailPage />
            }
        ]
    }
])

export default router