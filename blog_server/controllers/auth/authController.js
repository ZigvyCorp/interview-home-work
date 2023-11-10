import { UserModel } from "../../models/index.js";
import ErrorHandler from "../../utills/errorHandle.js";
import catchAsyncError from "../../middleware/catchAsyncErrors.js";
import sendToken from "../../utills/jwtToken.js";

export const register = catchAsyncError(async (req, res, _next) => {
  const { username, phone, password, email } = req.body;

  const userId = UserModel.findOne({ email: email });
  if (!userId) {
    return _next(new ErrorHandler("Email exist", 402));
  }
  const user = await UserModel.create({
    username,
    email,
    password,
  });

  return sendToken(user, 200, res);
});
export const login = catchAsyncError(async (req, res, _next) => {
  const { username, password } = req.body;
  console.log(username, password);
  if (!username || !password || username === "" || password === "") {
    return _next(new ErrorHandler("Please enter username/password...", 400));
  }
  const user = await UserModel.findOne({ username }).select("+password");
  if (!user) {
    return _next(new ErrorHandler("Wrong username or password", 401));
  }
  const isPasswordMatched = await user.comparePassword(password);
  if (!isPasswordMatched) {
    return _next(new ErrorHandler("Wrong username or password...", 401));
  }
  sendToken(user, 200, res);
});

export const logout = catchAsyncError(async (req, res, _next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "Logged out successfully!!",
  });
});
