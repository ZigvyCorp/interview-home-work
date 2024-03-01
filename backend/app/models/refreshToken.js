const mongoose = require("mongoose");

const refreshTokenModel = new mongoose.Schema({
  token: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  expiredDate: {
    type: Date,
    required: true,
  }
});

module.exports = mongoose.model("refreshToken", refreshTokenModel);
