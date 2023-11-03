import { ENDPOINTS } from '~/constants/endpoints';
import { publicAxios } from '~/lib/axiosClient';

// [GET] /api/v1/search/posts?keyword=:keyword
export const searchPostByKeywordService = async (keyword: string) => {
    const res = await publicAxios.get(ENDPOINTS.SEARCH_POST_BY_KEYWORD(keyword));
    return res.data;
};
