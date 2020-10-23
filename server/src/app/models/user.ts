import mongoose, { Schema, Document, Model } from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const userSchema = new Schema(
  {
    username: {
      type: Schema.Types.String,
      unique: true,
      required: true,
      trim: true,
    },
    password: {
      type: Schema.Types.String,
      required: true,
      trim: true,
      minlength: 6,
    },
    name: {
      type: Schema.Types.String,
      required: true,
      trim: true,
      minlength: 4,
    },
    dob: {
      type: Schema.Types.Date,
    },
    tokens: [
      {
        token: {
          type: Schema.Types.String,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

userSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();
  delete userObject.password;
  delete userObject.tokens;
  return userObject;
};

userSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign(
    { _id: user._id.toString() },
    process.env.JWT_SECRET_KEY
  );
  user.tokens = [...user.tokens, { token }];
  return token;
};

userSchema.statics.findByCredentials = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const user: any = await User.findOne({ email });
  if (!user) {
    throw new Error("Dont have User");
  }
  const isMatch = bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("Cant not Log in");
  }
  return user;
};

userSchema.pre("save", async function (next) {
  const user: { password: string } | any = this;
  try {
    var hash = bcrypt.hashSync(user.password, 8);
    user.password = hash;
  } catch (err) {
    console.log("err", err);
  }
  next();
});

export const userModelName = "Users";

const User = mongoose.model(userModelName, userSchema);

export default User as any;
