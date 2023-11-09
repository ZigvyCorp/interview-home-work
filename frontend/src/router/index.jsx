import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import PostDetail from '../pages/PostDetail'

const pageData = [
    {
        path: '',
        element: <HomePage />,
        title: 'HomePage',
    },
    {
        path: '/:postId',
        element: <PostDetail />,
        title: 'PostDetail',
    },
]

const Router = () => {
    const pageRouters = pageData.map((v) => {
        return <Route key={v.title} path={v.path} element={v.element} />
    })
    return <Routes>{pageRouters}</Routes>
}

export default Router
