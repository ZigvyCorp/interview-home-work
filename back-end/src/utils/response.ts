import { Response } from 'express';
import { ResponseType } from '../interfaces';
import httpStatus from 'http-status';

export const successResponse = ({
  res,
  data,
  message = '',
  httpCode,
}: {
  res: Response;
  data: any;
  message?: string;
  httpCode?: number;
}) => {
  const sendPayload: ResponseType<typeof data> = {
    data,
    success: true,
    message,
  };
  res.status(httpCode || httpStatus.OK).send(sendPayload);
};

export const errorResponse = ({
  res,
  data,
  message = '',
  httpCode,
}: {
  res: Response;
  data?: any;
  message?: string;
  httpCode?: number;
}) => {
  const sendPayload: ResponseType<typeof data> = {
    data: data || null,
    success: false,
    message,
  };
  res.status(httpCode || httpStatus.INTERNAL_SERVER_ERROR).send(sendPayload);
};
