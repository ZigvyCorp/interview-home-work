import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  username: { type: String, require: true },
  password: { type: String, require: true },
  name: String,
  dob: String,
  created_at: { type: Date, default: Date.now },
});

export const User = model('User', userSchema);
