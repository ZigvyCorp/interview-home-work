import mongoose from "mongoose";

const DOCUMENT_NAME = "User";

const UserSchema = new mongoose.Schema(
  {
    _id: {
      type: Number,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
    },
    dob: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const UserModel = mongoose.model(DOCUMENT_NAME, UserSchema);
export type UserDocument = typeof UserSchema & Document;
//Export the model
export { UserModel, UserSchema };
