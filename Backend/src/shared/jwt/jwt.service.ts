import { sign, verify } from 'jsonwebtoken';

import { Injectable } from '@nestjs/common';

import { AllConfigType } from '~/common/configs/type/config.type';

import {
  JwtPayload,
  ResetPasswordPayload,
  SignupConfirmationPayload,
  TokenType,
} from './jwt-payload.model';
import { ConfigService } from '@nestjs/config';
import { JwtSignToken } from '~/common/interfaces/jwt.interface';

@Injectable()
export class JwtService {
  private readonly jwtPrivateKey: string;

  constructor(private readonly configService: ConfigService<AllConfigType>) {
    this.jwtPrivateKey = this.configService.get('jwt.jwtPrivateKey', {
      infer: true,
    });
  }

  async signAccessToken(jwtSignToken: JwtSignToken): Promise<string> {
    const payload: JwtPayload = {
      tokenType: TokenType.ACCESS_TOKEN,
      id: jwtSignToken.user.id,
      email: jwtSignToken.user.email,
    };

    return sign(payload, this.jwtPrivateKey, {
      expiresIn: jwtSignToken.expiresIn,
    });
  }

  async signResetPasswordToken(jwtSignToken: JwtSignToken): Promise<string> {
    const payload: JwtPayload = {
      tokenType: TokenType.RESET_PASSWORD,
      id: jwtSignToken.user.id,
      email: jwtSignToken.user.email,
    };

    return sign(payload, this.jwtPrivateKey, {
      expiresIn: jwtSignToken.expiresIn,
    });
  }

  async signConfirmationToken(jwtSignToken: JwtSignToken): Promise<string> {
    const payload: SignupConfirmationPayload = {
      tokenType: TokenType.SIGNUP_CONFIRMATION,
      id: jwtSignToken.user.id,
      email: jwtSignToken.user.email,
    };

    return sign(payload, this.jwtPrivateKey, {
      expiresIn: jwtSignToken.expiresIn,
    });
  }

  isSignupConfirmationPayload(payload: any): payload is JwtPayload {
    return (
      'tokenType' in payload &&
      payload.tokenType === TokenType.SIGNUP_CONFIRMATION
    );
  }

  async validateSignConfirmationToken(
    token: string,
  ): Promise<SignupConfirmationPayload> {
    try {
      const payload: any = verify(token, this.jwtPrivateKey);
      if (!this.isSignupConfirmationPayload(payload)) {
        return null;
      }

      return payload as SignupConfirmationPayload;
    } catch {
      return null;
    }
  }

  isResetPasswordConfirmationPayload(payload: any): payload is JwtPayload {
    return (
      'tokenType' in payload && payload.tokenType === TokenType.RESET_PASSWORD
    );
  }

  async validateResetPasswordConfirmationToken(
    token: string,
  ): Promise<ResetPasswordPayload> {
    try {
      const payload: any = verify(token, this.jwtPrivateKey);
      if (!this.isResetPasswordConfirmationPayload(payload)) {
        return null;
      }

      return payload as ResetPasswordPayload;
    } catch {
      return null;
    }
  }
}
