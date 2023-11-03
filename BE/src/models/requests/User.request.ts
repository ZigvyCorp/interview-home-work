import { JwtPayload } from 'jsonwebtoken'
import { TokenType } from '~/constants/enum'

export interface RegisterReqBody {
  name: string
  email: string
  password: string
  confim_password: string
  date_of_bird: string
}

export interface LoginReqBody {
  email: string
  password: string
}

export interface TokenPayload extends JwtPayload {
  user_id: string
  token_type: TokenType
}
