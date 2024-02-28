const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var CommentSchema = new mongoose.Schema(
  {
    postId: {
      type: mongoose.Types.ObjectId,
      ref: "Post",
    },
    body: {
      type: String,
      required: true,
      maxlength: 200 
    },
    authorId: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

//Export the model
module.exports = mongoose.model("Comment", CommentSchema);
