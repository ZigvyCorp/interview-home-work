import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
const MyLayout = React.lazy(() => import("../components/MyLayout"));
const Homepage = React.lazy(() => import("../modules/hompage/HomePageView"))
const ListUser = React.lazy(() => import("../modules/user/UserListView"))

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MyLayout />,
        children: [
            {
                path: "/",
                element: <Suspense> 
                    <Homepage />
                </Suspense>,
            },
            {
                path: "/users",
                element: <Suspense> 
                    <ListUser />
                </Suspense>,
            },
        ]
    },

    {
        path: '*',
        element: <div>Error</div>
    }
]);