const Comment = require('../models/Comment');

const getCommentsByPostId = (req, res) => {
    const { PostId  } = req.params;
    Comment.find({[post._id] : PostId}).then(comments=>{
        res.status(200).json({
            status:'success',
            message:'Get comments in post successfully',
            data:comments
        })
    })
};

module.exports = {
    getCommentsByPostId
}
