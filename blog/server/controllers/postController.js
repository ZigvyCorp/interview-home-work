const fetch = require('node-fetch');
const {mock_url} = require('../const/config')
const getAllPost = async (req,res)=>{
    const response = await fetch(mock_url+"/posts");
    const posts = await response.json();
    const newPosts = posts.map((post,i) =>{
        return {
            "id": post.id,
            "owner": post.userId,
            "title": post.title,
            "content": post.body,
            "created_at": (new Date()).getTime() - i*1000*60*60,
            "tags": ["consult", "it", "hala"]
          }
    })
    return res.json(newPosts)
}

const getPostWithID = async (req,res)=>{
    const {id} = req.params;
    const response = await fetch(mock_url+"/posts/"+id);
    const post = await response.json();
    console.log(post)
    if(!post.id){
        return res.status(404).send('API not found');
    }
    const newPost = {
            "id": post.id,
            "owner": post.userId,
            "title": post.title,
            "content": post.body,
            "created_at": (new Date()).getTime() - id*1000*60*60,
            "tags": ["consult", "it", "hala"]
    }
    return res.json(newPost)
}


module.exports = {
    getAllPost,
    getPostWithID
}