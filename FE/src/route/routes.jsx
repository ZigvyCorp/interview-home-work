import MainLayout from "../components/layout/MainLayout";
import Home from "../pages/Home";

export const routes = [
    {
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
        ]
    }
]


