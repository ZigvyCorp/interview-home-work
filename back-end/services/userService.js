import User from '../models/userModel.js';

export const getAllUser = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    return error;
  }
};

export const getUser = async (userId) => {
  try {
    return await User.findOne({ _id: userId });
  } catch (error) {
    return error;
  }
};

export const createUser = async (user) => {
  try {
    const { name, email, avatarUrl } = user;
    const newUser = new User({ name, email, avatarUrl });
    return await newUser.save();
  } catch (error) {
    return error;
  }
};

export const updateUser = async (userId, user) => {
  try {
    const newUser = await User.findOneAndUpdate(
      { _id: userId },
      { $set: user },
      { new: true }
    );
    return newUser;
  } catch (error) {
    return error;
  }
};

export const deleteUser = async (userId) => {
  try {
    const user = await User.findOneAndDelete({ _id: userId });
    return user;
  } catch (error) {
    return error;
  }
};
