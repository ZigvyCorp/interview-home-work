const User = require("../models/userSchema");
const asyncHandler = require("express-async-handler");

const createUser = asyncHandler(async (req, res) => {
  const email = req.body.email;
  const findUser = await User.findOne({ email: email });
  if (!findUser) {
    const newUser = await User.create(req.body);
    res.status(200).json(newUser);
  } else {
    throw new Error("User Already Exists");
  }
});

const getAllUsers = asyncHandler(async (req, res) => {
  try {
    const getUsers = await User.find();
    res.status(200).json(getUsers);
  } catch (err) {
    throw new Error(err);
  }
});

const getUser = asyncHandler(async (req, res) => {
  const { userid } = req.params;

  try {
    const user = await User.findOne({ _id: userid });

    if (!user) {
      return res.status(404).json({ message: "no user" });
    }

    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "eror server" });
  }
});

const updateUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const updateUser = await User.findByIdAndUpdate(
      id,
      {
        name: req?.body?.name,
        phone: req?.body?.phone,
        email: req?.body?.email,
        ...req.body,
      },
      {
        new: true,
      }
    );

    res.status(200).json(updateUser);
  } catch (err) {
    throw new Error(error);
  }
});

const deleteUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const deleteUser = await User.findByIdAndDelete(id);
    res.status(200).json(deleteUser);
  } catch (err) {
    throw new Error(err);
  }
});

module.exports = {
  createUser,
  deleteUser,
  updateUser,
  getAllUsers,
  getUser,
};
