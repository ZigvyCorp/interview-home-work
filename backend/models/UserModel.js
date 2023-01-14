const mongoose = require("mongoose");
const userService = require("../services/UserService")

const schema = new mongoose.Schema(
  {
    // _id: mongoose.Schema.Types.ObjectId,
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: false,
    },
    dob: {
      type: Date,
      required: false,
      default: Date.now,
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "created_at",
      currentTime: () => Math.floor(Date.now() / 1000),
    },
  }
);

schema.pre('save', async function(next){
  const user = this;
  if (user.isModified('password')){
    user.password = await userService.hashPassword(user.password);
  }

  next();

})

module.exports = mongoose.model("User", schema);
