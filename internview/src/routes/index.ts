import Home from '../pages/Home';
import Login from '../pages/Login';
// public Routes
const publicRoutes = [
    { path: '/login', component: Login },
    { path: '/', component: Home },
];
// Private Routes

export { publicRoutes };
