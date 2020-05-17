const mongoose  = require('mongoose');
const Schema = mongoose.Schema;

// Design Schema
let postSchema = new Schema({
    title: String,
    content: String,
    owner: {
        type: Schema.Types.ObjectId,
        ref:'users'
    },
    comments: [
        {
            owner: {
                type: Schema.Types.ObjectId,
                ref:'users'
            },
            text: String,
            create_at: Number
        }
    ],
    created_at: Number,
    tags: []
});

// end Design 

module.exports = mongoose.model('posts', postSchema);