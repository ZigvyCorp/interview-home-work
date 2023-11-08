import { RegisterReqBody } from '~/models/requests/User.requests';
import User from '~/models/schemas/User.schema';
import databaseService from './database.services';
import { hashPassword } from '~/utils/crypto';
import { signToken, verifyToken } from '~/utils/jwt';
import { TokenType, UserRole } from '~/constants/enum';
import { ENV_CONFIG } from '~/constants/config';
import RefreshToken from '~/models/schemas/RefreshToken.schema';

class UsersService {
  // Tạo access token
  async signAccessToken({ user_id, role }: { user_id: string; role: UserRole }) {
    return signToken({
      payload: {
        user_id,
        role,
        token_type: TokenType.AccessToken
      },
      privateKey: ENV_CONFIG.JWT_SECRET_ACCESS_TOKEN,
      options: {
        expiresIn: ENV_CONFIG.ACCESS_TOKEN_EXPIRES_IN
      }
    });
  }

  // Tạo refresh token
  async signRefreshToken({ user_id, role, exp }: { user_id: string; role: UserRole; exp?: number }) {
    if (exp) {
      return signToken({
        payload: {
          user_id,
          role,
          token_type: TokenType.RefreshToken,
          exp
        },
        privateKey: ENV_CONFIG.JWT_SECRET_REFRESH_TOKEN
      });
    }
    return signToken({
      payload: {
        user_id,
        role,
        token_type: TokenType.RefreshToken
      },
      privateKey: ENV_CONFIG.JWT_SECRET_REFRESH_TOKEN,
      options: {
        expiresIn: ENV_CONFIG.REFRESH_TOKEN_EXPIRES_IN
      }
    });
  }

  // Tạo access và refresh token
  async signAccessAndRefreshToken({ user_id, role, exp }: { user_id: string; role: UserRole; exp?: number }) {
    return Promise.all([this.signAccessToken({ user_id, role }), this.signRefreshToken({ user_id, role, exp })]);
  }

  // Giải mã refresh token
  private decodeRefreshToken(refresh_token: string) {
    return verifyToken({
      token: refresh_token,
      secretOrPublicKey: ENV_CONFIG.JWT_SECRET_REFRESH_TOKEN
    });
  }

  // Đăng ký
  async register(body: RegisterReqBody) {
    const { insertedId } = await databaseService.users.insertOne(
      new User({
        ...body,
        password: hashPassword(body.password)
      })
    );
    const user = await databaseService.users.findOne(
      {
        _id: insertedId
      },
      {
        projection: {
          password: 0
        }
      }
    );
    return {
      user
    };
  }

  // Đăng nhập
  async login({ user_id, role }: { user_id: string; role: UserRole }) {
    const [access_token, refresh_token] = await this.signAccessAndRefreshToken({
      user_id,
      role
    });
    const { iat, exp } = await this.decodeRefreshToken(refresh_token);
    await databaseService.refresh_tokens.insertOne(
      new RefreshToken({
        token: refresh_token,
        iat,
        exp
      })
    );
    return {
      access_token,
      refresh_token
    };
  }

  // Đăng xuất
  async logout(refresh_token: string) {
    await databaseService.refresh_tokens.deleteOne({
      token: refresh_token
    });
    return true;
  }

  // Refresh token
  async refreshToken({
    refresh_token,
    user_id,
    role,
    exp
  }: {
    refresh_token: string;
    user_id: string;
    role: UserRole;
    exp: number;
  }) {
    const [[new_access_token, new_refresh_token]] = await Promise.all([
      this.signAccessAndRefreshToken({
        user_id,
        role,
        exp
      }),
      databaseService.refresh_tokens.deleteOne({
        token: refresh_token
      })
    ]);
    const { iat } = await this.decodeRefreshToken(new_refresh_token);
    await databaseService.refresh_tokens.insertOne(
      new RefreshToken({
        token: new_refresh_token,
        iat,
        exp
      })
    );
    return {
      access_token: new_access_token,
      refresh_token: new_refresh_token
    };
  }
}

const usersService = new UsersService();
export default usersService;
