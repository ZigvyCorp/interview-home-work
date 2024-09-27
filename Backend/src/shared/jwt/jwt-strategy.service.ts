import { ExtractJwt, Strategy, VerifiedCallback } from 'passport-jwt';

import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';

import { UserContext } from '~/common/interfaces/context.interface';
import { UserService } from '~/modules/users/user.service';
import { AllConfigType } from '~/common/configs/type/config.type';

import { JwtPayload, TokenType } from './jwt-payload.model';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly userService: UserService,
    readonly configService: ConfigService<AllConfigType>,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: configService.get('jwt.jwtPrivateKey', { infer: true }),
    });
  }

  async validate(payload: JwtPayload, done: VerifiedCallback) {
    if (payload.tokenType != TokenType.ACCESS_TOKEN) {
      return done(new HttpException({}, HttpStatus.UNAUTHORIZED), false);
    }

    const user = await this.userService.getUserById(payload.id);

    const context: UserContext = {
      user,
    };

    return done(null, context, payload.iat);
  }
}
