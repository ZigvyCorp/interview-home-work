export const ENDPOINTS = {
    FIND_ALL_POSTS: (page: number) => `/posts?page=${page}`,
    FIND_POST_BY_ID: (postID: number) => `/posts/${postID}`,

    SEARCH_POST_BY_KEYWORD: (keyword: string) =>
        `/search/posts?keyword=${encodeURIComponent(keyword)}`,

    FIND_ALL_COMMENTS_BY_POST_ID: ({ postID, page }: { postID: number; page: number }) =>
        `/comments?postID=${postID}&page=${page}`,
};

export const API_URL = import.meta.env.VITE_API_URL;
