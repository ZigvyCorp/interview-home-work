import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const oldUser = await User.findOne({ email });

    if (!oldUser)
      return res.status(404).json({ message: "User doesn't exist" });

    const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);

    if (!isPasswordCorrect)
      return res.status(400).json({
        status: "Fail",
        message: "Invalid credentials",
      });

    const token = jwt.sign(
      { email: oldUser.email, id: oldUser._id },
      process.env.SECRET,
      { expiresIn: process.env.EXPIRED || "30D" }
    );

    res.status(200).json({
      status: "Success",
      data: oldUser,
      access_token: token,
    });
  } catch (err) {
    res.status(500).json({
      status: "Fail",
      message: "Something went wrong",
    });
  }
};

const signup = async (req, res) => {
  const { email, password, firstName, lastName } = req.body;

  try {
    const oldUser = await User.findOne({ email });

    if (oldUser)
      return res.status(400).json({
        status: "Fail",
        message: "User already exists",
      });

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await User.create({
      email,
      password: hashedPassword,
      name: `${firstName} ${lastName}`,
    });

    const token = jwt.sign(
      { email: result.email, id: result._id },
      process.env.SECRET,
      { expiresIn: process.env.EXPIRED || "30D" }
    );

    res.status(201).json({
      status: "Success",
      data: result,
      access_token: token,
    });
  } catch (error) {
    res.status(500).json({
      status: "Fail",
      message: "Something went wrong",
    });

    console.log(error);
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await User.find();

    return res.status(200).json({
      status: "Success",
      results: users.length,
      data: users,
    });
  } catch (err) {
    return res.status(500).json({
      status: "Fail",
      message: err.message,
    });
  }
};

export { signup, signin, getUsers };
