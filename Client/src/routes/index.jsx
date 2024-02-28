import {
    AppLayout,
    AuthLayout,
    Home,
    ProtectedRoute,
    LoginPage,
    RejectedRoute,
    PostDetailPage,
    UserPostPage,
    Routes,
    RegisterPage
} from './routes.jsx';
import { Outlet, useRoutes } from 'react-router-dom';

export default function useRouteElements() {

    return useRoutes(
        [
            {
                path: Routes.AUTH.path,
                element: <RejectedRoute/>,
                children: [
                    {
                        path: Routes.AUTH.LOGIN,
                        element: (
                            <AuthLayout>
                                <LoginPage/>
                            </AuthLayout>
                        )
                    },
                    {
                        path: Routes.AUTH.REGISTER,
                        element: (
                            <AuthLayout>
                                <RegisterPage/>
                            </AuthLayout>
                        )
                    },
                ]
            },
            {
                path: Routes.HOME.path,
                element: <ProtectedRoute/>,
                children: [
                    {
                        path: Routes.HOME.path,
                        element: (
                            <AppLayout>
                                <Home/>
                            </AppLayout>
                        )
                    },
                    {
                        path: Routes.POST.path,
                        element: <Outlet/>,
                        children: [
                            {
                                path: Routes.POST.POST_DETAIL,
                                element: (
                                    <AppLayout>
                                        <PostDetailPage/>
                                    </AppLayout>
                                )
                            },
                        ]
                    },
                    {
                        path: Routes.USER.path,
                        element: <Outlet/>,
                        children: [
                            {
                                path: Routes.USER.USER_POST,
                                element: (
                                    <AppLayout>
                                        <UserPostPage/>
                                    </AppLayout>
                                )
                            },
                        ]
                    },
                ]
            },
            {
                path: '*',
                element: <div>Not Found</div>
            }
        ]
    )
}
