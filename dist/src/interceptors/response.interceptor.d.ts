import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
export declare class ResponseTransformInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): any;
}
