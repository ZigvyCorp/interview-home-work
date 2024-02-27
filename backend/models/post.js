const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var postSchema = new mongoose.Schema(
  {
    owner: { type: mongoose.Types.ObjectId, ref: "User" },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
    },
    tag: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

//Export the model
module.exports = mongoose.model("Post", postSchema);
