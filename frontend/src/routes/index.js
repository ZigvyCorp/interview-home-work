import { useRoutes } from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import PageNotFound from '../pages/PageNotFound';

import MainLayout from '../layouts/MainLayout';

import AuthGourd from '../guards/AuthGourd';
import GuestGuard from '../guards/GuestGuard';
import PostsSearch from '../pages/PostsSearch';

const Router = () => {
    return useRoutes([
        {
            path: '/',
            element: <AuthGourd>
                <MainLayout />
            </AuthGourd>,
            children: [
                {
                    element: <Home />,
                    index: true
                },
                {
                    path: '/search',
                    element: <PostsSearch />
                }
            ]
        },
        {
            path: '/login',
            element: <GuestGuard>
                <Login />
            </GuestGuard>
        },
        {
            path: '/register',
            element: <GuestGuard>
                <Register />
            </GuestGuard>
        },
        {
            path: '/*',
            element: <PageNotFound />
        }
    ]);
};

export default Router;