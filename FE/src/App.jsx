import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { Content } from 'antd/es/layout/layout';
import { NavBar } from './components/NavBar';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
const Layout = () => {
  return (
    <>
      <NavBar />
      <Content>
        <Outlet />
      </Content>
    </>
  );
};
const route = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    // errorElement: <RouterError />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={route} />
    </>
  );
}

export default App;
