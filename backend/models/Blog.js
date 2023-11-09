import mongoose from "mongoose";

const Schema = mongoose.Schema;
 
const blogSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  tags: { 
    type: [String],
    required: true
  }, 
  created_at: {
    type: Number,
    default: Date.now
  }
})

export default mongoose.model("Blog", blogSchema);