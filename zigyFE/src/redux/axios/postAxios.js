import axios from 'axios';


export function getAllPostAPI(){
    return axios.get('/api/post/v1/getallpost');
}

export function getPostByKeywordAPI(keyword){
    return axios.get('/api/post/v1/getbykeyword', {
                params: {
                keyword: keyword
                }
            })
}

export function createPostAPI(post){
    return axios.request({
        method: 'post',
        url: '/api/post/v1/add',
        data: post
    })
}
