import { http } from "."

export const getPost = (pageIndex: number) => {
    return http.get(`/posts/?page_index=${pageIndex - 1}`);
}