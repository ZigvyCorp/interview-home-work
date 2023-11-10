const mongoose = require('mongoose');
const commentModel = require('../models/Comment');

exports.getCommentsByPostId = (req,res) => {
    const id = req.body.postId;
    console.log('passed id:', id);
    commentModel
    .find({postId: id})
    .then(listComments => {
        return res.status(200).json({
            success: true,
            message: "List of comments by post id",
            result: listComments
        })
    })
    .catch(error => {
        return res.status(500).json({
            success: false,
            message: 'Could not get list of comments by post id',
            result: error.message
        })
    })
}

