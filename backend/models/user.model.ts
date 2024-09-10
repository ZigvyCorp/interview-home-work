import mongoose from "mongoose";

export interface IUserDocument {
  id: number;
  name: string;
  username: string;
  email: string;
}

const userSchema = new mongoose.Schema(
  {
    name: String,
    id: Number,
    username: String,
    email: String,
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const User = mongoose.model<IUserDocument>("User", userSchema);
export default User;
