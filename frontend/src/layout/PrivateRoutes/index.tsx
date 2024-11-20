import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { selectIsAuthenticated } from '../../redux/reducer/userReducer';

const PrivateRoutes = () => {
    const isAuthenticated = useSelector(selectIsAuthenticated)
    const location = useLocation();
    return (
            !isAuthenticated
            ? <Navigate to={"/login"} state={{ from: location }} replace/>
            : <Outlet/>
    );
}

export default PrivateRoutes