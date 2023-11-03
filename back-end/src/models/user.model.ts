import mongoose from 'mongoose';
import paginate from './plugins/paginate';
import toJSON from './plugins/toJSON';
import { IUser } from '../interfaces';
import { MODEL_NAME } from './name';

const { Schema } = mongoose;

const validateEmail = function (email: string) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

const userSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      required: true,
      validate: [validateEmail, 'Please fill a valid email address'],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        'Please fill a valid email address',
      ],
    },
    phone: { type: String, required: true },
  },
  { timestamps: true }
);

// add plugin that converts mongoose to json
userSchema.plugin(toJSON);
userSchema.plugin(paginate);

/**
 * @typedef User
 */
const UserModel = mongoose.model(MODEL_NAME.USER, userSchema);

export { UserModel };
