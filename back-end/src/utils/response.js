export const successResponse = (data) => {
  return {
    success: true,
    data,
  };
};

export const failedResponse = (message) => {
  return {
    success: false,
    message,
  };
};
