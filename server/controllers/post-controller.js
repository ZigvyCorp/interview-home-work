const mongoose = require('mongoose');
const Post = require('../models/post-model');
const User = require('../models/user-model');

getAllPosts = async (req, res) =>  {
   
    await mongoose.model('Post').find({}, (err, posts) => {
        if (err) {
            return res.status(400).json({success: false, error: err});
        } 
        if (!posts.length) {
            return res.status(404).json({success: false, error: "There is no posts by that Id."});
        }

        return res.status(200).json({success: true, data: posts});
    }).catch(err => console.log(err));
}

getPostsById = async (req, res) =>  {
    await mongoose.model('Post').findOne({id: req.params.id}, (err, posts) => {
        if (err) {
            return res.status(400).json({success: false, error: err});
        } 
        
        return res.status(200).json({success: true, data: posts});
    }).catch(err => console.log(err));
}

getUserById = async (req, res) => {
    await mongoose.model('User').findOne({id: req.params.id}, (err, user) => {
        if (err) {
            return res.status(400).json({success: false, error: err});
        } 
        
        return res.status(200).json({success: true, data: user});
    }).catch(err => console.log(err));
}



module.exports = {
    getAllPosts, 
    getPostsById,
    getUserById
}
