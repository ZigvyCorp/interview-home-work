import mongoose from "mongoose";
import { defaultErrorHandler } from "./errorBoundary";
import HTTP_STATUS from "../constants/httpStatus";
import HTTP_NAME from "../constants/httpName";
import { Response } from "express";
export const checkIdType = (id: any, res: Response) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return defaultErrorHandler(
      {
        status: HTTP_STATUS.BAD_REQUEST,
        message: "Post id is invalid",
        name: HTTP_NAME.BAD_REQUEST,
      },
      res
    );
  } else {
    return true;
  }
};
