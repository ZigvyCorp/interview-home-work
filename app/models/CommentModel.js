const mongoose = require('mongoose'); // Import mongoose
const Schema =  mongoose.Schema; // Import Schema

const ConmmentSchema = new Schema ({
    _id: {
        type: mongoose.Types.ObjectId
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        requiued: true,
    },
    post: {
        type: mongoose.Types.ObjectId,
        ref: 'Post',
        required: true,
    },
    content: {
        type: String
    },
    created_at: {
        type: Date,
        default: new Date().toLocaleDateString("en-us")
    }
});

module.exports = mongoose.model('Comment', ConmmentSchema)