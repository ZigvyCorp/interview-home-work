
import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    
      id: {
      type: Number,
      require: true,
      default:0,
    },
    username: {
      type: String,
      require: true,
      min: 3,
      max: 20,
      unique: true,
    },
    
    password: {
      type: String,
      required: true,
      min: 6,
    },
    name: {
      type: String,
      require: true,
      min: 3,
      max: 20,
      unique: true,
    },
    dob: {
      type: Date,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", UserSchema);
