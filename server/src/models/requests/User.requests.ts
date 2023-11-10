import { JwtPayload } from 'jsonwebtoken';
import { UserRole } from '~/constants/enum';

export interface TokenPayload extends JwtPayload {
  user_id: string;
  role: UserRole;
  iat: number;
  exp: number;
}

// Body: Đăng ký
export interface RegisterReqBody {
  email: string;
  password: string;
  confirm_password: string;
}

// Body: Đăng xuất
export interface LogoutReqBody {
  refresh_token: string;
}

// Body: Refresh token
export interface RefreshTokenReqBody {
  refresh_token: string;
}
