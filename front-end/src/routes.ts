import React from "react";

export const hello = 'Hello'

export interface IRoute {
    name: string
    path: string;
    component: React.LazyExoticComponent<React.ComponentType<any>>;
};

export const routes: IRoute[] = [
    {
        name: 'Post',
        path: '/post',
        component: React.lazy(() => import('./pages/Post'))
    },
    {
        name: 'Comment',
        path: '/comment',
        component: React.lazy(() => import('./pages/Comment'))
    }
]