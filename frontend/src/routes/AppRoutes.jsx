import { Route, Routes } from 'react-router-dom';
import HomeLayout from '../layouts/HomeLayout/HomeLayout';
import HomePage from '../pages/HomePage/HomePage';
import PostDetailPage from '../pages/PostDetailPage/PostDetailPage';


export default function AppRoutes() {
    const ListRoutes = [
        { path: "/", page: <HomePage />, layout: <HomeLayout /> },
        { path: "/post/:id", page: <PostDetailPage />, layout: <HomeLayout /> },
    ];

    return (
        <Routes>
            {ListRoutes.map(({ page, path, layout }, index) => (
                <Route key={index} element={layout}>
                    <Route path={path} element={page} />
                </Route>
            ))}
        </Routes>
    );
}