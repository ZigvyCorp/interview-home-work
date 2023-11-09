const mongoose = require('mongoose')
const postchema = new mongoose.Schema(
    {
        owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', require: true},
        title: { type: String, require: true},
        content: { type: String, require: true},
        created_at: { type: String, require: true},
        tags: [{ name: {type: String, require: true},},],
    },
    {
        timestamps: true
    }
);
const Post = mongoose.model('Post', postchema);
module.exports = Post;