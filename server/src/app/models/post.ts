import mongoose, { Schema } from "mongoose";
import { userModelName } from "./user";

const post = new Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: userModelName,
    },
    title: {
      type: Schema.Types.String,
      required: true,
    },
    content: {
      type: Schema.Types.String,
      required: true,
    },
    tags:[ {
      type: Schema.Types.String,
      required: true,
    }],
  },
  {
    timestamps: true,
  }
);

export const postModelName = "Posts";

export default mongoose.model(postModelName, post);
