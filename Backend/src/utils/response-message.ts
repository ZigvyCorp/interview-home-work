export const ResponseMessage = <T>({
  message = 'Success',
  data,
  statusCode = 200,
}: {
  message: string;
  data?: T;
  statusCode?: number;
}) => {
  return {
    message,
    data,
    statusCode,
  };
};
