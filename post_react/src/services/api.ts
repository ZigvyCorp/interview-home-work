import { https } from "./config";

export const postAPI = {
    getListPost: () => https.get("/getListPost"),
    searchPost: (tuKhoa: string) => https.get(`/searchPost?tuKhoa=${tuKhoa}`),
    getPostById: (id: string | undefined) => https.get(`/getPostById/${id}`)
}

export const commentAPI = {
    getCmtByPostId: (id: string | undefined | number) => https.get(`/comment/getCommentByPost?postId=${id}`)
}