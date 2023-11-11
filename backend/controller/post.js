const postService = require("../services/post")

const apiGetAllPosts = async (req, res, next) => {
    try {
        const posts = await postService.apiGetAllposts
        if(!posts) {
            res.status(404).json("There are no posts found yet!");
        }
        res.json(posts)
    } catch (error) {
        res.status(500).json({ error: error });
    }
}

const  apiGetPostByPage = async (req, res, next) => {
    try {
        const page = req.query.page || 1;
   const key = req.query.key || "";
        const post = await postService.apiGetPostByPage(page, key)
        if(!post) {
            res.status(404).json("There are no post found yet!");
        }
        res.json(post)
    } catch (error) {
        res.status(500).json({ error: error });
    }
}


const  apiCreatePost = async (req, res, next) => {
    try {
        const post = await postService.apiCreatePost()
        if(!post) {
            res.status(404).json("Post has not been created yet!");
        }
        res.json(post)
    } catch (error) {
        res.status(500).json({ error: error });
    }
}

const  apiUpdatePost = async (req, res, next) => {
    try {
        const post = await postService.apiUpdatePost()
        if(!post) {
            res.status(404).json("Update post failed!");
        }
        res.json(post)
    } catch (error) {
        res.status(500).json({ error: error });
    }
}


module.exports = {
    apiGetAllPosts,
    apiGetPostByPage,
    apiCreatePost,
    apiUpdatePost
}