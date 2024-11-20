const mongoose = require('mongoose'); // Import mongoose
const Schema =  mongoose.Schema; // Import Schema

const PostSchema = new Schema ({
    _id: {
        type: mongoose.Types.ObjectId
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    title: {
        type: String
    },
    content: {
        type: String
    },
    tags: [

    ],
    created_at: {
        type: Date,
        default: new Date().toLocaleString("en-us")
    }
});

module.exports = mongoose.model('Post', PostSchema)