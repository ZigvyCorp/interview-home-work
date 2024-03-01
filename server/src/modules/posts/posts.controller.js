import httpStatus from "http-status";
import ErrorResponse from "../../common/response/error.response.js";
import SingleResponse from "../../common/response/single.response.js";
import ListResponse from "../../common/response/list.response.js";
import { RESPONSE_MESSAGE } from "../../constant/response.constant.js";

import service from "./posts.service.js";
import logger from "../../common/logger/index.js";

export const getList = async (req, res, next) => {
  try {
    const serviceRes = await service.getList(req.query);
    if (serviceRes.isFailed()) {
      return next(serviceRes);
    }
    const { data, total, page, limit } = serviceRes.getData();
    return res.json(new ListResponse(data, total, page, limit));
  } catch (error) {
    logger.error(error?.message);
    return next(new ErrorResponse(httpStatus.BAD_REQUEST, error, RESPONSE_MESSAGE.REQUEST_FAILED));
  }
};

export const detail = async (req, res, next) => {
  try {
    const serviceRes = await service.getDetail(req.params.id);

    if (serviceRes.isFailed()) {
      return next(serviceRes);
    }

    return res.json(new SingleResponse(serviceRes.getData()));
  } catch (error) {
    return next(new ErrorResponse(httpStatus.BAD_REQUEST, error, RESPONSE_MESSAGE.REQUEST_FAILED));
  }
};

export default {
  getList,
  detail,
};
