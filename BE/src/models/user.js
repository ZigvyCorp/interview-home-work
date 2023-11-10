import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    _id: Number,
    username: String,
    password: String,
    name: String,
    dob: String,
    created_at: Date,
  },
  { _id: false }
);

export const User = model('User', userSchema);
