import { Suspense, useEffect } from 'react';
import { Route, Routes, redirect, useLocation } from 'react-router';
import { routes } from '../../routes';
import NotFound from '../../pages/NotFound';
import Header from './Header';
import Container from '../Container';

const Layout = () => {

    const location = useLocation();
    useEffect(() => {
        const routesAccepted = routes.map(route => route.path);
        if (!routesAccepted.includes(location.pathname)) {
            redirect("/post")
        }
    }, [location.pathname])

    return (
        <>
            <Header />
            <Suspense fallback={<div>Loading...</div>}>
                <div className="w-full h-full overflow-auto text-white">
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
            </Suspense>
        </>
    )
}

export default Layout