import { useEffect } from 'react';
import { Route, Routes, redirect, useLocation } from 'react-router';
import NotFound from '../../pages/NotFound';
import { routes } from '../../routes';
import Container from '../Container';
import Header from './Header';

const Layout = () => {

    const location = useLocation();
    useEffect(() => {
        const routesAccepted = routes.map(route => route.path);
        if (!routesAccepted.includes(location.pathname)) {
            redirect("/post")
        }
    }, [location.pathname])

    return (
        <div>
            <Header />
            <div className="w-full h-full my-12 overflow-auto text-white">
                <Container>
                    <Routes>
                        <Route path='*' element={<NotFound />} />
                        {routes.map((r) => {
                            const Component = r.component;
                            return <Route key={r.name} path={r.path} element={<Component />} />;
                        })}
                    </Routes>
                </Container>
            </div>
        </div>
    )
}

export default Layout