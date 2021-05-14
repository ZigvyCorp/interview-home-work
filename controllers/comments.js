const Comments = require('../models/commentsModel');

const commentsControllers={
    getComments :async (req,res)=>{
        try {
            const comments = await Comments.find({});
            if(!comments) return res.status(400).json({msg: 'Comment does not exist'});
            res.status(200).json(comments);
        } catch (error) {
            res.status(500).json({msg: error})
        }
    },
    createComment :async (req,res)=>{
        try {
            const newComment = req.body;
            const comment = await Comments(newComment);
            await comment.save();

            res.status(200).json(comment);
        } catch (error) {
            res.status(500).json({msg: error})
        }
    },
    updateComment :async (req,res)=>{
        try {
            const updateComment = req.body;
            const comment = await Comments.findOneAndUpdate({_id:updateComment._id},updateComment,{ new:true });

            res.status(200).json(comment);
        } catch (error) {
            res.status(500).json({msg: error})
        }
    },
    deleteComment :async (req,res)=>{
        try {
            const idComment = req.params.id;
            await Comments.findOneAndDelete({_id:idComment});

            res.status(200).json({msg:"delete Success!"});
        } catch (error) {
            res.status(500).json({msg: error})
        }
    },
}

module.exports = commentsControllers;