import { http } from "./axios";

export const getCommentRequest = async () => {
    return http.get("/comment");
};

