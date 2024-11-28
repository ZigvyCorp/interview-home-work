import mongoose from 'mongoose';

const CommentSchema = new mongoose.Schema({
  postId: {
    type: Number,
    required: true,
  },
  id: {
    type: Number,
    required: true,
    unique: true 
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    match: [/.+@.+\..+/, 'Please fill a valid email address'] 
  },
  body: {
    type: String,
    required: true
  }
}, { timestamps: true }); 

const Comment = mongoose.model('Comment', CommentSchema);

export default Comment;
