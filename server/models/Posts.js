const mongoose = require("mongoose");
const postsSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
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
    default: Date.now,
  },
  tags: {
    type: [String],
  },
});

module.exports = mongoose.model("posts", postsSchema);
