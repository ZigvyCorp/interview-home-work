import { JwtPayload } from 'jsonwebtoken';

export interface TokenPayload extends JwtPayload {
  user_id: string;
  role: string;
  iat: number;
  exp: number;
}

// Body: Đăng ký
export interface RegisterReqBody {
  email: string;
  password: string;
  confirm_password: string;
}
