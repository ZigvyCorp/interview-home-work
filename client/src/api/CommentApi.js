import axiosClient from './axiosClient';

const commentApi = {
    getAllComments: (data,params)=>{
        const url = '/comments';
        return axiosClient.get(url,data,params);
    }, 
    getCommentById: (params)=>{
        console.log(params);
        const url = '/comments?postId='+ params;
        return axiosClient.get(url);
    }
}

export default commentApi;