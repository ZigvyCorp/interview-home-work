import mongoose from "mongoose";
import { IRefreshToken } from "../types/refreshToken.type";

const refreshTokenModel = new mongoose.Schema<IRefreshToken>({
  token: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "users",
  },
  expiredDate: {
    type: Date,
    required: true,
  },
});

export const RefreshToken = mongoose.model<IRefreshToken>(
  "refreshToken",
  refreshTokenModel
);
