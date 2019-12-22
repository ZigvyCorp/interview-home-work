import service from '../services';


export const getPostsAPI = {
    getPosts,
    getPost,
    createPost
};

function getPosts(page){

    return (page) ? service.post('/post/view/' + page) : service.post('/post/view/1')

}

function getPost(id){

    return service.post('/post/view/' + id)

}

function createPost(title, summary, content, tag)
{
    return service.post('/post/create',{title,summary, content,tag})
}