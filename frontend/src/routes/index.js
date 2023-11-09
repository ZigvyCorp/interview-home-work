import { useRoutes } from 'react-router-dom';
import PageNotFound from '../pages/PageNotFound';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import DetailPost from '../pages/DetailPost';
import MainLayout from '../layouts/MainLayout';

const Router = () => {
    return useRoutes([
        {
            path: '/',
            element: <MainLayout />,
            children: [
                {
                    element: <Home />,
                    index: true
                },
                {
                    path: '/posts/:id',
                    element: <DetailPost />
                },
            ]
        },
        {
            path: '/login',
            element: <Login />
        },
        {
            path: '/register',
            element: <Register />
        },
        {
            path: '/*',
            element: <PageNotFound />
        }
    ]);
};

export default Router;