const Post = require("../models/PostModel");
const User = require("../models/UserModel");
const postController = {
    postPost: async(req,res)=>{
        try{
            const newPost = new Post(req.body);
            const savedPost = await newPost.save();
            if(req.body.userId){
                const user = User.find({userId: req.body.userId})
                await user.updateOne({
                    $push: {postId: savedPost.postId}
                });
            }
            res.status(200).json(savedPost);
        }
        catch(err){
            res.status(500).json(err);
        }
    },
    getAllpost: async(req, res)=>{
        try{
            const post = await Post.find();
            res.status(200).json(post);
        }catch(err)
        {
            res.status(500).json(err);
        }
    },
    getPost: async(req, res)=>{
        try{
            if(req.body.postId){
                const post = await Post.find({postId: req.body.postId})
                res.status(200).json(post);
            }
        }
        catch(err){
            res.status(500).json(err);
        }
    },
    updatePost: async(req,res)=>{
        try{
            if(req.body.postId){
                const post = Post.find({postId: req.body.postId});
                await post.updateOne({$set: req.body});
            }
            if(req.body.userId){
                const user = User.find({userId: req.body.userId});
                await user.updateOne({
                    $push: {postId: req.body.postId}
                });
            }
            
            res.status(200).json("Update successfully");
        }
        catch(err){
            res.status(500).json(err);
        }
    },

    deletePost: async(req, res)=>{
        try{
            if(req.body.postId){
                
            await User.updateOne({postId: req.body.postId},{$pull: {postId: req.body.postId}});
            await Post.findOneAndDelete({postId: req.body.postId});
            }
            res.status(200).json("delete successfully");
        }catch(err){
            res.status(500).json(err);        
        }
    }
};

module.exports = postController;