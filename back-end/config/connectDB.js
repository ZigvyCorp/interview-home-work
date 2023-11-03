import mongoose from 'mongoose';

const connectDB = () => {
  mongoose.connect('mongodb://localhost:27017/simple_blog');
};

export default connectDB;
