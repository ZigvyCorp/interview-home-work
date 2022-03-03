import axiosClient from './axiosClient';

const postApi = {
    getAllPost: ()=>{
        const url = '/posts';
        return axiosClient.get(url);
    }, 
    getPostById: (params)=>{
        const url = '/posts/'+ params;
        return axiosClient.get(url);
    },
    getCommentOfPost : (params)=>{
        const url = `/posts/${params}/comments`;
        return axiosClient.get(url);
    }
}

export default postApi;