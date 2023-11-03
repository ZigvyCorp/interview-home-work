import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: String,
  email: String,
  avatarUrl: String,
  createdAt: { type: Number, default: Date.now },
});

export default mongoose.model('User', UserSchema);
