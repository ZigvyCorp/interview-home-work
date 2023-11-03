import React from "react";
import Post from "./pages/Post";
import PostDetail from "./pages/PostDetail";

export const hello = 'Hello'

export interface IRoute {
    name: string
    path: string;
    component: () => JSX.Element;
};

export const routes: IRoute[] = [
    {
        name: 'Post',
        path: '/',
        component: Post
    }
    ,
    {
        name: 'Post Detail',
        path: '/post/:id',
        component: PostDetail
    }
]