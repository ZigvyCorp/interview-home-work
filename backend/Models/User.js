import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    require: [true, "userName is required"],
  },
  email: {
    type: String,
    require: [true, "email is required"],
    validate: {
      validator: function (email) {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      },
      message: (props) => `Email ${props.value} is invalid`,
    },
  },
  password: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const User = new mongoose.model("User", userSchema);

export default User;
