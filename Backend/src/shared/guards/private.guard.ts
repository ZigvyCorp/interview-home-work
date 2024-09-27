import { ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';

import { PRIVATE_KEY } from '../decorators/private.decorator';

@Injectable()
export class PrivateGuard extends AuthGuard('jwt') {
  constructor(private reflector: Reflector) {
    super({ property: 'context' });
  }

  canActivate(context: ExecutionContext) {
    const isPrivateRoute = this.reflector.getAllAndOverride<boolean>(
      PRIVATE_KEY,
      [context.getHandler()],
    );

    if (!isPrivateRoute) {
      return true;
    }

    return super.canActivate(context);
  }
}
