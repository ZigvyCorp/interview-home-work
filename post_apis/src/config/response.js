export const respsonseData = (res, message, data, statusCode) => {
  res.status(statusCode).json({
    statusCode: statusCode,
    message: message,
    content: data,
    dateTime: new Date(),
  });
};
