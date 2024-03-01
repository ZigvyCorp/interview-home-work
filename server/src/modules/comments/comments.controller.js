import httpStatus from "http-status";
import ErrorResponse from "../../common/response/error.response.js";
import SingleResponse from "../../common/response/single.response.js";
import { RESPONSE_MESSAGE } from "../../constant/response.constant.js";
import logger from "../../common/logger/index.js";

import service from "./comments.service.js";

export const getList = async (req, res, next) => {
  try {
    const serviceRes = await service.getList(req.query);
    if (serviceRes.isFailed()) {
      return next(serviceRes);
    }
    return res.json(new SingleResponse(serviceRes.getData()));
  } catch (error) {
    logger.error(error?.message);
    return next(new ErrorResponse(httpStatus.BAD_REQUEST, error, RESPONSE_MESSAGE.REQUEST_FAILED));
  }
};

export default {
  getList,
};
