import { EMessage, HttpStatus } from '@constants';
import { Response } from 'express';

class HttpResponse {
  success(res: Response, result: any, status?: HttpStatus) {
    const statusCode = status ? status : HttpStatus.OK;
    res.status(statusCode).json(result);
  }

  error(res: Response, msg: EMessage | string, status?: HttpStatus) {
    const statusCode = status ? status : HttpStatus.BAD_REQUEST;
    const result = {
      key: Object.values(EMessage).includes(msg as EMessage) ? this.getKeyByValue(msg) : undefined,
      message: msg,
      status: statusCode,
    };
    res.status(statusCode).json(result);
  }

  getKeyByValue = (value: string) => {
    const index = Object.values(EMessage).indexOf(value as unknown as EMessage);
    const key = Object.keys(EMessage)[index];
    return key;
  };
}

export default new HttpResponse();
