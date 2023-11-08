import React from "react";
import PostPage from "../pages/Post";
import NotFoundPage from "../pages/NotFound";
import PostDetailPage from "../pages/PostDetail";
import { MailOutlined } from "@ant-design/icons";

export interface IRoute {
    name: string;
    path: string;
    sidebar: boolean;
    icon?: React.FC;
    component: () => JSX.Element;
}

export const routes: IRoute[] = [
    {
        name: "Not found",
        path: "*",
        component: NotFoundPage,
        sidebar: false,
    },
    {
        name: "Post",
        path: "/post",
        component: PostPage,
        icon: MailOutlined,
        sidebar: true,
    },
    {
        name: "Detail",
        path: "/post/:id",
        component: PostDetailPage,
        sidebar: false,
    }
]