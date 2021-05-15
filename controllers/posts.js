const Posts = require('../models/postsModel');
const Comments = require('../models/commentsModel');

const postsControllers={
    getPosts :async (req,res)=>{
        try {
            const posts = await Posts.find({});
            if(!posts) return res.status(400).json({msg: 'Post does not exist'});
            res.status(200).json(posts);
        } catch (error) {
            res.status(500).json({msg: error})
        }
    },
    createPost :async (req,res)=>{
        try {
            const newPost = req.body;
            const post = await Posts(newPost);
            await post.save();

            res.status(200).json(post);
        } catch (error) {
            res.status(500).json({msg: error})
        }
    },
    updatePost :async (req,res)=>{
        try {
            const updatePost = req.body;
            const post = await Posts.findOneAndUpdate({_id:updatePost._id},updatePost,{ new:true });

            res.status(200).json(post);
        } catch (error) {
            res.status(500).json({msg: error})
        }
    },
    deletePost :async (req,res)=>{
        try {
            const idPost = req.params.id;
            await Posts.findOneAndDelete({_id:idPost});

            res.status(200).json({msg:"delete Success!"});
        } catch (error) {
            res.status(500).json({msg: error})
        }
    },
    getComments :async (req,res)=>{
        try {
            const idPost = req.params.id;
            const comments = await Comments.find({postId: idPost});

            res.status(200).json(comments);
        } catch (error) {
            res.status(500).json({msg: error})
        }
    },
    getPost :async (req,res)=>{
        try {
            const idPost = req.params.id;
            const post = await Posts.findById(idPost);

            res.status(200).json(post);
        } catch (error) {
            res.status(500).json({msg: error})
        }
    }
}
module.exports = postsControllers;