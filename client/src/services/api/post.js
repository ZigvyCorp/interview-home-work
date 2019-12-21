import service from '../services';


export const getPostsAPI = {
    getPosts,
    getPost
};

function getPosts(page){

    return (page) ? service.post('/post/view/' + page) : service.post('/post/view/1')

}

function getPost(id){

    return service.post('/post/view/' + id)

}