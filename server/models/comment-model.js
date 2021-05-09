const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const Comment = new Schema(
    {
        id: {type: Number, required: true},
        owner: {type: Number, required: true},
        post: {type: Number, required: true},
        content: {type: String, required: true},
        created_at: {type: Number, required: true},
    }
)



module.exports = mongoose.model('Comment', Comment);