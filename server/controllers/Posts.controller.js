const {axiosServer} = require("../config.js");
const randomWords = require('random-words');

module.exports.getAllPosts = async (req,res,next) =>{ 
    try {
        const response = await axiosServer.get('/posts');
        const arrayPost = response.map((post)=>{
            return {
                id: post.id,
                owner: post.userId,
                title: post.title,
                content: post.body,
                created_at: Date.now(),
                tags:randomWords(3)
            }
        })
        res.status(200).json(arrayPost);

    } catch (error) {
        res.status(404).send('not found!');
    }
}

module.exports.getPostById = async (req,res,next) =>{ 
    try {
        const params = req.params;
        const response = await axiosServer.get(`/posts/${params.id}`);
        const arrayPost = [response].map((post)=>{
            return {
                id: post.id,
                owner: post.userId,
                title: post.title,
                content: post.body,
                created_at: Date.now(),
                tags:randomWords(3)
            }
        })
        res.status(200).json(arrayPost);

    } catch (error) {
        res.status(404).send('not found!');
    }
}

module.exports.getCommentOfPost = async (req,res,next) =>{ 
    try {
        const params = req.params;
        const response = await axiosServer.get(`/posts/${params.id}/comments`);
        const arrayCmt = response.map((cmt)=>{
            return {
                id: cmt.id,
                owner: cmt.name,
                post: cmt.postId,
                content: cmt.body,
                created_at: Date.now(), 
            }
        })
        res.status(200).json(arrayCmt);

    } catch (error) {
        res.status(404).send('not found!');
    }
}
