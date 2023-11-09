import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
const MyLayout = React.lazy(() => import("../components/MyLayout"));
const Homepage = React.lazy(() => import("../modules/hompage/HomePageView"))

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
        ]
    },

    {
        path: '*',
        element: <div>Error</div>
    }
]);