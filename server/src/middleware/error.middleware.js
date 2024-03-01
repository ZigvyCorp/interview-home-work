import httpStatus from "http-status";
import { ValidationError } from "express-validation";

export default function ErrorMiddleware(error, req, res, next) {
  if (error instanceof Object && !(error instanceof ValidationError)) {
    switch (error.constructor.name) {
      case "NotFoundResponse":
      case "ErrorResponse":
        return res.status(error.status).json(error);
      case "ServiceResponse":
        error.status = httpStatus.BAD_REQUEST;
        return res.status(error.status).json({
          status: error.getStatus(),
          message: error.getMessage(),
          data: error.getData(),
          errors: error.getErrors(),
        });
      case "Error":
        return res.status(httpStatus.BAD_REQUEST).json({
          status: httpStatus.BAD_REQUEST,
          message: error.message,
          errors: error.errors || null,
        });
      default:
        if (!error.message) {
          error.message =
            "Our app has encountered an unforeseen issue. We will have this addressed shortly.";
        }
        if (!error.status) {
          error.status = httpStatus.BAD_REQUEST;
        }
        return res.status(error.status).json(error);
    }
  } else if (error instanceof ValidationError) {
    return res.status(httpStatus.BAD_REQUEST).json({
      status: httpStatus.BAD_REQUEST,
      message: error.details?.query?.[0]?.message?.replaceAll(`\"`, ""),
      errors: error.errors || null,
    });
  } else if (typeof error === "string" || error instanceof String) {
    return res.status(httpStatus.BAD_REQUEST).json({
      message: error,
      status: httpStatus.BAD_REQUEST,
    });
  }

  return res.status(error.status || httpStatus.BAD_REQUEST).json(error);
}
