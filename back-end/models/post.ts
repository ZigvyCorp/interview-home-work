import mongoose, { Schema } from "mongoose";

const postSchema: Schema = new Schema({
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: new Date(),
  },
  tags: [
    {
      type: String,
      required: true,
    },
  ],
});

export default mongoose.model("Post", postSchema);
