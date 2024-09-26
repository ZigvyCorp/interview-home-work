import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema(
  {
    // Define your model's schema here
  },
  { timestamps: true }
);

const Post = mongoose.model('Post', PostSchema);

export default Post;
