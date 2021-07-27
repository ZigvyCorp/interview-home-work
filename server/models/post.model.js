import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
    content: { type: String },
    tags: {
      type: [String],
    },
    comments: {
      type: [{ owner: { type: mongoose.Schema.Types.ObjectId, ref: "users" }, content: { type: String } }],
      default: [],
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("posts", postSchema);
