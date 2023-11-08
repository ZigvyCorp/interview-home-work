import React from "react";
import PostPage from "../pages/Post";
import PostDetailPage from "../pages/PostDetail";

export interface IRoute {
    name: string;
    path: string;
    icon?: React.FC;
    component: () => JSX.Element;
}

export const routes: IRoute[] = [
    {
        name: "Post",
        path: "/post",
        component: PostPage,
    },
    {
        name: "Detail",
        path: "/post/:id",
        component: PostDetailPage,

    }
]