import { Request, Response } from "express";
import User from "../models/user";
import IUser from "../interfaces/user";
import { Error } from "mongoose";

const getUsers = async (req: Request, res: Response) => {
  try {
    const findUsers = await User.find({});

    return res.status(200).json({
      message: "Get users successfully",
      data: findUsers,
    });
  } catch (error) {
    if (error instanceof Error)
      return res.status(500).json({
        message: "Internal server error",
        error,
      });
  }
};

const getUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const findUserById = await User.findById(id);

    if (!findUserById)
      return res.status(404).json({
        message: "User not found",
      });

    return res.status(200).json({
      message: "Get user successfully",
      data: findUserById,
    });
  } catch (error) {
    if (error instanceof Error)
      return res.status(500).json({
        message: "Internal server error",
        error,
      });
  }
};

const createUser = async (req: Request, res: Response) => {
  try {
    const { username, password, name, dob }: IUser = req.body;

    const oldUser = await User.findOne({ username });

    if (oldUser)
      return res.status(409).json({
        message: "User already exists",
      });

    const newUser = new User({
      username: username,
      password: password,
      name: name,
      dob: dob !== "" ? new Date(dob) : new Date(),
    });

    await newUser.save();

    return res.status(201).json({
      message: "Create user successfully",
      data: newUser,
    });
  } catch (error) {
    if (error instanceof Error)
      return res.status(500).json({
        message: "Internal server error",
        error,
      });
  }
};

const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { username, password, name, dob }: IUser = req.body;

    const findUserById = await User.findById(id);

    if (!findUserById)
      return res.status(404).json({
        message: "User not found",
      });

    const updatedUser = await User.findOneAndUpdate(
      {
        _id: id,
      },
      {
        $set: {
          username: username,
          password: password,
          name: name,
          dob: dob,
        },
      },
      // default will return unaltered data
      // return updated data
      { new: true }
    );

    return res.status(200).json({
      message: "Update user successfully",
      data: updatedUser,
    });
  } catch (error) {
    if (error instanceof Error)
      return res.status(500).json({
        message: "Internal server error",
        error,
      });
  }
};

const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const findUserById = await User.findById(id);

    if (findUserById) {
      const deletedUser = await User.findByIdAndDelete(id);

      return res.status(200).json({
        message: "Delete user successfully",
        data: deletedUser,
      });
    }

    return res.status(404).json({
      message: "User not found",
    });
  } catch (error) {
    if (error instanceof Error)
      return res.status(500).json({
        message: "Internal server error",
        error,
      });
  }
};

export default { getUsers, getUser, createUser, updateUser, deleteUser };
