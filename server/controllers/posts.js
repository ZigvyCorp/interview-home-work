import { PostModel } from "../models/PostModel.js";

export const getPosts = async (req,res) => {
    try {
    
        const posts = await PostModel.find();
  
    res.status(200).json(posts);
    } catch (err) {
        res.status(500).json({ error : err});
    }
};

export const createPost = async (req,res) => {
    try {
     const newPost = req.body;
     const post = new PostModel(newPost);



     await post.save();   
     res.status(200).json(post);
    } catch (err) {
        res.status(500).json({ error : err});
    }
};

export const updatePost = async (req,res) => {
    try {
     const updatePost = req.body;
     const post = await PostModel.findOneAndUpdate({_id: updatePost._id},updatePost, {new : true});
 
     res.status(200).json(post);
    } catch (err) {
        res.status(500).json({ error : err});
    }
};
export const postByID = async (req, res, next, id) => {
    try{
      let post = await PostModel.findById(id).populate('postedBy', '_id name').exec()
      if (!post)
        return res.status('400').json({
          error: "Post not found"
        })
      req.post = post
      next()
    }catch(err){
      return res.status('400').json({
        error: "Could not retrieve use post"
      })
    }
  };

export const createCmt = async (req, res) => {
    let comment = req.body.comment
    comment.postedBy = req.body.userId
    try{
      let result = await PostModel.findByIdAndUpdate(req.body.postId, {$push: {comments: comment}}, {new: true})
                              .populate('comments.postedBy', '_id name')
                              .populate('postedBy', '_id name')
                              .exec()
      res.json(result)
    }catch(err){
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err)
      })
    }
  }