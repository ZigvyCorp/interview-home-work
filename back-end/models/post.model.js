const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    id: Number,
    userId: Number,
    title: String,
    body: String
});

postSchema.index({ title: "text" })

const Post = mongoose.model('Post', postSchema);

module.exports = Post;