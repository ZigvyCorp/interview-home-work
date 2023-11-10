const Post = require('../models/Post')

const getAllPost = async(req,res) => {
    try {
        const posts = await Post.find({})

        res.status(200).json({ posts })

    } catch (error) {
        res.status(500).json({ msg: error })
    }}

const getOnePost = async(req,res) => {
    try {
        const {id:postId} = req.params
        const post= await Post.findOne({id: postId})

        if(!post){
            return res.status(404).json({msg: `No post with id: ${postId}`})
        }

        res.status(200).json({post})

    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

module.exports={
    getAllPost,
    getOnePost
}