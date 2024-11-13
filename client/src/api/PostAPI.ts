import { http } from "."

export const getPost = (pageIndex: number, keywords: string) => {
    console.log(pageIndex)
    return http.get(`/posts/?pageIndex=${pageIndex - 1}&keywords=${keywords}`);
}