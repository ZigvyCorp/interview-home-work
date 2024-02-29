
import { HTTP } from '../../../lib/axiosClient';

export const fetchAllCommentAPI = async ({ postId, page }) => {
    const res = await HTTP.get(`comments?postId=${postId}&page=${page}`);
    return res.data;
};
