import { promisify } from "util";
import User from "../Models/User.js";
import jwt from "jsonwebtoken";

const signToken = (userId) => jwt.sign({ userId }, process.env.JWT_SECRET);

export const register = async (req, res) => {
  try {
    const { userName, email, password } = req.body;
    console.log("createUser", userName, email, password);
    if (!userName || !email || !password) {
      return res.status(400).json({
        error: "UserName, email, and password are required fields.",
      });
    }
    const existing_user = await User.findOne({ email: email });
    if (existing_user && existing_user.verified) {
      return res.status(400).json({
        status: "error",
        message: "Email already in use, Please login",
      });
    } else {
      const newUser = await User.create({
        userName,
        email,
        password,
      });
      const token = signToken(newUser._id);

      res.status(201).json({
        success: true,
        message: "Register successfully",
        userId: newUser._id,
        token,
      });
    }
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        status: "error",
        message: "Both email or password are required",
      });
    }

    const user = await User.findOne({
      email: email,
    }).select("+password");

    const checkpassword = await user.correctPassword(password, user.password);

    if (!user || !checkpassword) {
      return res.status(400).json({
        status: "error",
        message: "Email or Password is incorrect",
      });
    }
    const token = signToken(user._id);
    return res.status(200).json({
      status: "success",
      message: "Logged in successfully",
      token,
      user_id: user._id,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

export const protect = async (req, res, next) => {
  let token;
  console.log("protect");
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  } else if (req.cookies.jwt) {
    token = req.cookies.jwt;
  }
  if (!token) {
    return res.status(401).json({
      message: "You are not logged in! Please log in to get access",
    });
  }

  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  const this_user = await User.findById(decoded.userId);

  if (!this_user) {
    return res.status(401).json({
      message: "The user belonging to this token does no logger exist",
    });
  }

  req.user = this_user;
  next();
};
