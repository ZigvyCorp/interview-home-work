const mongoose = require('mongoose');
const commentModel = require('../models/Comment');

exports.getAllComments = (req,res) => {
    commentModel
    .find()
    .then(listComments => {
        return res.status(200).json({
            success: true,
            message: "List of comments",
            result: listComments
        })
    })
    .catch(error => {
        return res.status(500).json({
            success: false,
            message: 'Could not get list of comments',
            result: error.message
        })
    })
}

