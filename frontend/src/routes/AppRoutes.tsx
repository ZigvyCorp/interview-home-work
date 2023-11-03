import { Route, Routes } from 'react-router-dom';
import { ROUTES } from '~/constants/routes';
import MainLayout from '~/layouts/MainLayout/MainLayout';
import HomePage from '~/pages/HomePage/HomePage';
import PostDetailPage from '~/pages/PostDetailPage/PostDetailPage';

type Route = {
    path: string;
    page: JSX.Element;
    layout: JSX.Element;
};

export default function AppRoutes() {
    const publicRoutes: Route[] = [
        { path: ROUTES.HOME, page: <HomePage />, layout: <MainLayout /> },
        { path: ROUTES.POST_DETAIL, page: <PostDetailPage />, layout: <MainLayout /> },
    ];

    return (
        <Routes>
            {publicRoutes.map(({ page, path, layout }, index) => (
                <Route key={index} element={layout}>
                    <Route path={path} element={page} />
                </Route>
            ))}
        </Routes>
    );
}
