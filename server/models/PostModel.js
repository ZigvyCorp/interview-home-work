import mongoose from 'mongoose';


const schema = new mongoose.Schema({
    
    title:{
        type: String,
        required: true
    },
    body:{
        type: String,
        required: true
    },
    comments: [{
        text: String,
        created: { type: Date, default: Date.now },
        postedBy: { type: mongoose.Schema.ObjectId, ref: 'User'}
      }],
    postedBy: {type: mongoose.Schema.ObjectId, ref: 'User'},
    
   
},{timestamps :true}
);

export const PostModel = mongoose.model('Post',schema);