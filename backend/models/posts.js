const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const postSchema = new Schema({
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    content: {
        type: String,
        required: true
    },
    commentPost: [      {
        type: Schema.Types.ObjectId,
        ref: 'comment'
    }]
}, { timestamps: true })
const post = mongoose.model("post", postSchema, "post")

module.exports = post
