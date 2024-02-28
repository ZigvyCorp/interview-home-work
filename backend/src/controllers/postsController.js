const Posts = require("../models/postsModel");

// getall
const getPosts = async (req, res) => {
    try {
        const posts = await Posts.find();
        res.json(posts);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}


// get by id
const getPostById = async (req, res) => {
    try {
        const post = await Posts.findOne({ id: req.params.id });
        if (post) {
            res.json(post);
        } else {
            res.status(404).json({
                message: "Post not found"
            })
        }

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}


module.exports = {
    getPostById,
    getPosts,

}
