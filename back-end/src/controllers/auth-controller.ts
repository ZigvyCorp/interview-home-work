import bcrypt from "bcrypt";
import User, { IUser } from "@/models/user";
import { CookieOptions, Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import { createUser } from "@/repositories/user-repo";
import { convertToMilliseconds } from "@/utils";
import { MongoDocument } from "@/types";


export const registerRequest = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  await createUser({
    username, password
  });
  res.status(201).json({ message: "User created successfully" });
};

export const loginRequest = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const lowerCaseUsername = username.toLowerCase().trim();
  const user = await User.findOne({ username: lowerCaseUsername });
  if (!user) {
    console.error("User not found");
    res.status(404).json({ message: "User not found" });
    return;
  }
  const isMatch = await bcrypt.compare(password, user.passwordHash);
  if (!isMatch) {
    console.error("Invalid credentials");
    res.status(401).json({ message: "Invalid credentials" });
    return;
  }
  generateTokens(user, res);
  res.status(200).json({ message: "Logged in successfully" });
};

export const refreshTokenRequest = async (req: Request, res: Response) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken) {
    res.status(401).json({ message: "Refresh token required" });
    return;
  }

  const decoded = jwt.verify(refreshToken, process.env.JWT_SECRET!);
  if (typeof decoded === "string") {
    res.status(401).json({ message: "Invalid or expired token" });
    return;
  }
  const user = await User.findById(decoded.userId);
  if (!user) {
    res.status(404).json({ message: "User not found" });
    return;
  }
  generateTokens(user, res);
  res.status(200).json({ message: "Access token refreshed" });
};

const generateTokens = (user: IUser, res: Response) => {
  const newAccessToken = jwt.sign({
    userId: user._id,
    username: user.username
  }, process.env.JWT_SECRET!, { expiresIn: process.env.JWT_ACCESS_EXPIRATION });

  const newRefreshToken = jwt.sign({ userId: user._id }, process.env.JWT_SECRET!, { expiresIn: process.env.JWT_REFRESH_EXPIRATION });
  const cookieOptions: CookieOptions = {
    maxAge: convertToMilliseconds(process.env.JWT_REFRESH_EXPIRATION),
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax"
  };
  res.cookie("accessToken", newAccessToken, cookieOptions);
  res.cookie("refreshToken", newRefreshToken, cookieOptions);
};

