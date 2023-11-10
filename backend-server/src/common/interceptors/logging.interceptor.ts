import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Logger,
} from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  private readonly logger = new Logger(LoggingInterceptor.name);

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const now = Date.now();

    if (context.getType() === 'http') {
      const ctx = context.switchToHttp();
      const request = ctx.getRequest<Request>();
      this.logger.log(
        `[Request::${now}] [${new Date(now).toISOString()}] - ${request.url}`,
      );
    } else {
      this.logger.log(`[Request::${now}] [${new Date(now).toISOString()}]`);
    }

    return next.handle().pipe(
      tap(() =>
        this.logger.log(`[Response::${now}] - take ${Date.now() - now}ms`),
      ),
      catchError((err) => {
        this.logger.error(`[Error::${now}] - take ${Date.now() - now}ms`, err);
        return throwError(() => err);
      }),
    );
  }
}
