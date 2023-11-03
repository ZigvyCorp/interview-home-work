import { ENDPOINTS } from '~/constants/endpoints';
import { publicAxios } from '~/lib/axiosClient';

// [GET]  /api/v1/comments?postID=:postID&page=:page
export const findAllCommentsByPostIDService = async ({
    page,
    postID,
}: {
    page: number;
    postID: number;
}) => {
    const res = await publicAxios.get(ENDPOINTS.FIND_ALL_COMMENTS_BY_POST_ID({ postID, page }));
    return res.data;
};
