import { Document, Schema, Model, model } from "mongoose";
export interface IUsersModel extends Document {
  id: number;
  username: string;
  password: string;
  name: string;
  dob: string;
  post?: string[];
  comments?: string[];
  created_at: number;
}
const UserSchema = new Schema(
  {
    id: { type: Number, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String },
    dob: { type: String },
    posts: [{ type: Schema.Types.ObjectId, ref: "posts", unique: true }],
    comments: [{ type: Schema.Types.ObjectId, ref: "comments" }],
  },
  {
    timestamps: {
      createdAt: "created_at",
    },
  }
);

export const UserModel: Model<IUsersModel> = model<IUsersModel>(
  "Users",
  UserSchema
);
