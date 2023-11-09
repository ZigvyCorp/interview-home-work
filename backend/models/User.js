import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  username: { 
    type: String, 
    required: true 
  },
  password: {
    type: String,
    required: true,
  },
  dob: {
    type: String,
    required: true,
  },
  blogs: [{
    type: [Schema.Types.ObjectId],
    ref: 'Blog',
  }],
  created_at: {
    type: Number,
    default: Date.now,
  },
});

export default mongoose.model('User', userSchema);