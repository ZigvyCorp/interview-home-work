const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    // unique: true,
    // validate: {
    //   validator: function (e) {
    //     const re =
    //       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //     return re.test(String(e).toLowerCase());
    //   },
    //   message: (props) => `${props.value} is not a valid Email!`,
    // },
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    // validate: {
    //   validator: function (p) {
    //     return p.length >= 8;
    //   },
    //   message: () => `your password is not long enough, 8 or more plzz`,
    // },
  },
  desc: String,
  avatar: String,
  created_at: {
    type: Number,
    required: true
  },
  dob: String
});

const User = mongoose.model("user", userSchema);
module.exports = User;
