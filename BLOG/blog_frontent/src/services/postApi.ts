import { PostType, PostListState } from "types/postType";
import axios from "axios";

const getListPosts = ({ page, search }: { page: number; search: string }) => {
    const urlPostAPI = `${process.env.REACT_APP_API_READ_LIST_POSTS}?page=${page}&search=${search}`;
    const options = {
        method: 'GET',
        url: urlPostAPI,
    };
    return axios
        .request<PostListState>(options)
        .then(function (response) {
            return response.data;
        })
        .catch(function (error: any) {
            console.error(error);
            return Promise.reject(error);
        });
}

const getDetailPost = ({ postId }: { postId: string }) => {
    const urlPostAPI = `${process.env.REACT_APP_API_READ_POST_BY_ID}/${postId}`;
    const options = {
        method: 'GET',
        url: urlPostAPI
    };

    return axios
        .request<PostType>(options)
        .then(function (response) {

            return response.data;
        })
        .catch(function (error: any) {
            console.error(error);
            return Promise.reject(error);
        });
}

const postApi = {
    getListPosts: getListPosts,
    getDetailPost: getDetailPost
}

export default postApi;