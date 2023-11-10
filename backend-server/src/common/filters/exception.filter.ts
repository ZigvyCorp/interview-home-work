import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { Response } from 'express';

@Catch()
export class GlobalExceptionFilter
  extends BaseExceptionFilter
  implements ExceptionFilter
{
  catch(exception: any, host: ArgumentsHost) {
    if (host.getType() === 'http') {
      const ctx = host.switchToHttp();
      const response = ctx.getResponse<Response>();
      const status = exception.status || 500;

      response.status(status).json({
        success: false,
        code: status,
        message: exception.response?.message || exception.message,
      });
    } else {
      super.catch(exception, host);
    }
  }
}
