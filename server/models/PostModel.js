import mongoose from 'mongoose';


const schema = new mongoose.Schema({
    id:{
        type: Number,
        required: true,
        default: 0
    },
    userId:{
        type: Number,
        required: true,
        default: 0
    },
    title:{
        type: String,
        required: true
    },
    body:{
        type: String,
        required: true
    },
   
},{timestamps :true}
);

export const PostModel = mongoose.model('Post',schema);