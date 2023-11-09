const mongoose = require('mongoose');
const postModel = require('../models/post')

exports.getAllPosts = (req,res) => {
    postModel
    .find()
    .then((listPosts) => {
        return res.status(200).json({
            success: true,
            message: 'List of posts',
            result: listPosts
        });
    })
    .catch((error) => {
        return res.status(500).json({
            success: false,
            message: 'Could not get list of posts',
            result: error.message
        })
    })
}