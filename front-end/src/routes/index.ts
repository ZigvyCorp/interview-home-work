import { ComponentType } from "react";
import HomePage from "../pages/home_page";
import PostDetails from "../pages/post_details";

export const routePath = {
    homePage: "/",
    detailsPost: "/detailsPost/:id"
}


export interface IRoute {
    path: string,
    component: ComponentType<any>
}

export const routes: IRoute[] = [
    {
        path: routePath.homePage,
        component: HomePage
    },
    {
        path: routePath.detailsPost,
        component: PostDetails
    }
]