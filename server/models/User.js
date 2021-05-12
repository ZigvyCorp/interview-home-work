
import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {username: {
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
     
    },
   
    
  },
  { timestamps: true }
);

export const User = mongoose.model("User", UserSchema);
