import { http } from "."

export const getPost = (pageIndex: number) => {
    return http.get(`/post/?page_index=${pageIndex - 1}`);
}