import { ENDPOINTS } from '~/constants/endpoints';
import { publicAxios } from '~/lib/axiosClient';

// [GET] /api/v1/posts?page=:page
export const findAllPostsService = async (page: number) => {
    const res = await publicAxios.get(ENDPOINTS.FIND_ALL_POSTS(page));
    return res.data;
};

// [GET] /api/v1/posts/:postID
export const findPostByPostIDService = async (postID: number) => {
    const res = await publicAxios.get(ENDPOINTS.FIND_POST_BY_ID(postID));
    return res.data;
};
