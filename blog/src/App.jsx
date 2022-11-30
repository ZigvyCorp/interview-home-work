import { Layout } from "antd";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import HeaderCpn from "./components/Header/Header";
import PostDetail from "./pages/PostDetail/PostDetail";

const { Header, Content, Footer } = Layout;

const MainLayout = () => {
    return (
        <div className="App">
            <Header>
                <HeaderCpn />
            </Header>
            <Content>
                <Outlet />
            </Content>
        </div>
    );
};
const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/post/:id",
                element: <PostDetail />,
            },
        ],
    },
]);
function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
