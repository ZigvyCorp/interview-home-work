import User from "../models/user.model.js";
import createError from "../utils/createError.js";

export const deleteUser = async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).send("Your account has been deleted.");
  } catch (error) {
    next(error);
  }
};
export const getUser = async (req, res, next) => {
  const user = await User.findById(req.params.id);
  res.status(200).send(user);
};
export const getUsers = async (req, res, next) => {
  const users = await User.find();
  res.status(200).send(users);
};
export const createUser = async (req, res, next) => {
  const newUser = new User({
    ...req.body,
  });
  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    next(err);
  }
};

export const updateUser = async (req, res, next) => {
  const user = await User.findById(req.params.id);
  if (req.userId !== user._id.toString()) {
    return next(createError(403, "Bạn chỉ được cập nhật tài khoản của bạn!"));
  }
  await User.findByIdAndUpdate(req.params.id, req.body);
  res.status(200).send("Tài khoản của bạn đã được cập nhật!");
};
