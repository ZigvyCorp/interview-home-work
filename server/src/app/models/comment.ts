import mongoose, { Schema } from "mongoose";
import { userModelName } from "./user";
import { postModelName } from "./post";

const comment = new Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: userModelName,
    },
    post: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: postModelName,
    },
    content: {
      type: Schema.Types.String,
    },
  },
  {
    timestamps: true,
  }
);
export const commentModelName = "Comments";

export default mongoose.model("Comments", comment);
