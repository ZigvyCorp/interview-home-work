import { AuthModel } from "../models/auth.model.js";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

export const handleLogin = async (req, res, next) => {
  const { username, password } = req.body;

  try {
    const account = await AuthModel.login(username);

    if (!account) {
      return res.status(401).json({ message: "Username does not exists" });
    }

    if (account.password !== password) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    const token = jwt.sign(
      {
        userId: account.id,
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "1d" }
    );

    const data = {
      id: account.id,
      name: account.name,
    };

    res
      .cookie("token", `Bearer ${token}`, {
        httpOnly: true,
        maxAge: 86400000, // 24 hour
      })
      .status(200)
      .json({ data, token });
  } catch (error) {
    next(error);
  }
};

export const handleLogout = async (req, res) => {
  res
    .clearCookie("token")
    .status(200)
    .json({ data: "Successfully logged out" });
};
