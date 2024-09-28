const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
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
  create_at: {
    type: Date,
    default: Date.now,
  },
  tags: {
    type: [String],
  },
});

module.exports = mongoose.model("Post", postSchema);
