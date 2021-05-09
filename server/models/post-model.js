const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Post = new Schema(
    {
        id: {type: Number, required: true},
        owner: {type: Number, required: true},
        title: {type: String, required: true},
        content: {type: String, required: true},
        created_at: {type: Number, required: true }
    }
)

module.exports = mongoose.model('Post', Post);
/*
const Comment = new Schema(
    {
        id: {type: Number, required: true},
        owner: {type: Number, required: true},
        post: {type: Number, required: true},
        content: {type: String, required: true},
        created_at: {type: Number, required: true},
    }
)

const User = new Schema(
    {
        id: {type: Number, required: true},
        username: {type: String, required: true},
        password: {type: String, required: true},
        name: {type: String, required: true},
        dob: {type: Date, required: true},
        created_at: {type: Number, required: true }
    }
)

var post = mongoose.model('Post', Post, 'blogs');
var comment = mongoose.model('Comment', Comment, 'blogs');
var user = mongoose.model('User', User, 'blogs');

module.exports = {
    post, 
    comment, 
    user
}*/


