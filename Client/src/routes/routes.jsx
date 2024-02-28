import { lazy, Suspense, useContext } from 'react';
import { AuthContext } from '../context/AuthContext.jsx';
import { Navigate, Outlet } from 'react-router-dom';
import Page from '../components/page/index.jsx';
import Header from '../app/header/index.jsx';
import PropTypes from 'prop-types';
import { Loading } from '../components/Loading/index.jsx';


export const Home = lazy(() => import('../pages/Home'))
export const PostDetailPage = lazy(() => import('../pages/PostDetail'))

export const UserPostPage = lazy(() => import('../pages/user'))


export const LoginPage = lazy(() => import('../pages/Login'))
export const RegisterPage = lazy(() => import('../pages/Register'))

function ProtectedRoute() {
    const { isLogin } = useContext(AuthContext)
    return isLogin ? <Outlet/> : <Navigate to={Routes.AUTH.LOGIN}/>
}

function RejectedRoute() {
    const { isLogin } = useContext(AuthContext)
    return !isLogin ? <Outlet/> : <Navigate to={Routes.HOME.path}/>
}

function AppLayout({ children }) {
    return (
        <>
            <Header/>
            <Page>
                <Suspense fallback={
                    <Loading
                        size="large"
                    />
                }>
                    {children}
                </Suspense>
            </Page>
        </>

    )
}

function AuthLayout({ children }) {
    return (
        <>
            <Page style={{
                height: '100vh'
            }}>
                <Suspense fallback={
                    <Loading
                        size="large"
                    />
                }>
                    {children}
                </Suspense>
            </Page>
        </>

    )
}


const Routes = {
    AUTH: {
        path: '/auth',
        LOGIN: '/auth/login',
        REGISTER: 'register',
        FORGET_PASSWORD: 'forget-password',
    },
    HOME: {
        path: '/',
    },
    POST: {
        path: '/post',
        POST_DETAIL: 'detail/:postId',
        POST_SEARCH: 'search'
    },
    USER: {
        path: '/user',
        USER_POST: 'detail/:userId',
    },
}


AppLayout.propTypes = {
    children: PropTypes.any
};

AuthLayout.propTypes = {
    children: PropTypes.any
};

export { Routes, ProtectedRoute, RejectedRoute, AppLayout, AuthLayout }
