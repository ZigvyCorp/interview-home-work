import { Types } from "./types";

const onNextPage = () => {
    return {
        type: Types.onNextPage,
    };
};

const onPrevPage = () => {
    return {
        type: Types.onPrevPage,
    };
};

const onPageNumClick = (pageNum) => {
    return {
        type: Types.onPageNumClick,
        payload: pageNum,
    };
};

const getPostsFetch = () => {
    return {
        type: Types.getPostsFetch,
    };
};

const getPostsSuccess = (posts) => {
    return {
        type: Types.getPostsSuccess,
        payload: posts,
    };
};

const onQuerySearch = (query, posts) => {
    let filteredPosts = posts.filter((post) => {
        return post.title.toLowerCase().includes(query.toLowerCase());
    });

    console.log("filteredPosts: ", filteredPosts);
    return {
        type: Types.onQuerySearch,
        payload: {
            query,
            filteredPosts,
        }
    };
};

export {
    onNextPage,
    onPrevPage,
    onPageNumClick,
    getPostsFetch,
    getPostsSuccess,
    onQuerySearch,
};


