import { UserModel } from "../models/user.model.js";

export const handleGetUserInfo = async (req, res, next) => {
  const { userId } = req.body;
  try {
    const user = await UserModel.getUserById(userId);
    if (!user) {
      throw new AppError(404, "NOT_FOUND");
    }
    res.status(200).json({ data: user });
  } catch (error) {
    next(error);
  }
};
