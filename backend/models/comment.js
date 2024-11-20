const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var commentSchema = new mongoose.Schema(
  {
    owner: { type: mongoose.Types.ObjectId, ref: "User" },
    post: { type: mongoose.Types.ObjectId, ref: "Post" },
    content: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

//Export the model
module.exports = mongoose.model("Comment", commentSchema);
