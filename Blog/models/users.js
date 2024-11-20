import mongoose from "mongoose";
const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
      min: 3,
      max: 20,
    },
    username: {
      type: String,
      require: true,
      max: 50,
    },
    email: {
      type: String,
      require: true,
      min: 50,
      unique: true,
    },
    address: {
      street: {
        type: String,
      },
      suite: {
        type: String,
      },
      city: {
        type: String,
      },
      zipcode: {
        type: String,
      },
      geo: {
        lat: {
          type: Number,
        },
        lng: {
          type: Number,
        },
      },
    },
    phone: {
      type: String,
      unique: true,
    },
    website: {
      type: String,
    },
    company: {
      name: {
        type: String,
      },
      catchPhrase: {
        type: String,
      },
      bs: {
        type: String,
      },
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("user", UserSchema);
