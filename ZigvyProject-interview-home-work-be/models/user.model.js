const mongoose = require("mongoose"); // Erase if already required
const bcrypt = require("bcrypt");
// const crypto = require("crypto");
// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    posts: [
      
        { type: mongoose.Types.ObjectId, ref: "Post" },
      
    ],
    // refreshToken: {
    //   type: String,
    // },
    // passwordChangedAt: {
    //   type: String,
    // },
    // passwordResetToken: {
    //   type: String,
    // },
    // passwordResetExprires: {
    //   type: String,
    // },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true}, // chi chay khi dung .json
    toObject: {virtuals: true} // chi chay khi goi ham object
  }
);

//Export the model
module.exports = mongoose.model("User", userSchema);
