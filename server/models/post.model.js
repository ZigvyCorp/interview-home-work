import mongoose from "mongoose";
const { Schema } = mongoose;

const PostSchema = new Schema(
  {
    id: {
      type: Number,
      required: true,
      unique: true,
    },
    owner: {
      type: Number,
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
    tags: {
      type: Array,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Post", PostSchema);
