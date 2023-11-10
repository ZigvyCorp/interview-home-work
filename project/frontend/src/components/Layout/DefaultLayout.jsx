import { Outlet } from 'react-router-dom';
import { Header } from './Header';
function DefaultLayout() {
    return (
        <>
            <Header />
            <div className="content">
                <Outlet />
            </div>
        </>
    );
}

export default DefaultLayout;
