import { ExceptionFilter, Catch, ArgumentsHost, HttpException, HttpStatus } from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';
import * as winston from 'winston';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

  catch(exception: unknown, host: ArgumentsHost): void {
    const { httpAdapter } = this.httpAdapterHost;

    const ctx = host.switchToHttp();
    const request = ctx.getRequest<Request>();

    const httpStatus = exception instanceof HttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;

    const httpResponse =
      exception instanceof HttpException ? (exception.getResponse() as object) : { message: 'Internal server error' };

    const responseBody = {
      statusCode: httpStatus,
      ...httpResponse,
    };

    const exceptionLog = {
      requestId: request['requestId'],
      path: request.url,
      statusCode: httpStatus,
    };

    const logger = winston.createLogger({
      level: 'error',
      defaultMeta: {
        ...exceptionLog,
      },
      format: winston.format.combine(
        winston.format.errors({ stack: true }),
        winston.format.timestamp(),
        winston.format.json(),
      ),
      transports: [new winston.transports.Console()],
    });
    logger.error(exception);

    httpAdapter.reply(ctx.getResponse(), responseBody, httpStatus);
  }
}
