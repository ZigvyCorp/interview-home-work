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
    comment: [      {
        type: String,
        required: false,
        ref: 'account'
    }]
}, { timestamps: true })
const post = mongoose.model("post", postSchema, "post")

module.exports = post
