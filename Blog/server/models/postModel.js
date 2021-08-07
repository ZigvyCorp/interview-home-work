import mongoose from 'mongoose';
const schema = new mongoose.Schema({
    author: {
        type: String,
        require: true
    },
    date: {
        type: String,
        require: true
    },
    title: {
        type: String,
        require: true
    },
    content: {
        type: String,
        require: true
    },
    listCmt: {
        type: Array,
        default: []
    }
})

export const PostModel = mongoose.model('Post', schema);