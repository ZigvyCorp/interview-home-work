const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,

    },
    content: {
        type: String,
        required: true,

    },
    image: {
        type: String,
        required: true,


    },
    author: { type: mongoose.Types.ObjectId, ref: "User" },
    comments: [{
        postedBy: { type: mongoose.Types.ObjectId, ref: "User" },
        content: { type: String }
    }],
    views: {
        type: Number,
        default: 0,

    },
    likes: [
        { type: mongoose.Types.ObjectId, ref: "User" }
    ],
    disLikes: [
        { type: mongoose.Types.ObjectId, ref: "User" }
    ],

}, { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } });

//Export the model
module.exports = mongoose.model('Blog', blogSchema);