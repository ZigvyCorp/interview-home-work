import logger from "../../common/logger/index.js";
import ServiceResponse from "../../common/response/service.response.js";
import HttpRequest from "../../helper/request.helper.js";
import config from "../../config/index.js";

const httpRequest = new HttpRequest(config.externalBaseUrl);

const getList = async (queryParams = {}) => {
  try {
    const postId = queryParams.postId;

    const comments = await httpRequest.getRequest().get(`/comments?postId=${postId}`);

    return new ServiceResponse(true, "", comments);
  } catch (err) {
    logger.error(err?.message);
    return new ServiceResponse(true, "", []);
  }
};

export default {
  getList,
};
