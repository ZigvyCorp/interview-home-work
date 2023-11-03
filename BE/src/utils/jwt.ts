import { config } from 'dotenv'
import jwt, { JwtPayload, Secret, SignOptions } from 'jsonwebtoken'
import { TokenPayload } from '~/models/requests/User.request'
config()

type SignTokenParam = {
  payload: string | object | Buffer
  privateKey: Secret
  options?: SignOptions
}

export const sighToken = ({
  payload,
  privateKey,
  options = {
    algorithm: 'HS256'
  }
}: SignTokenParam) => {
  return new Promise<string>((resolve, rejects) => {
    jwt.sign(payload, privateKey, options, (error, token) => {
      if (error) {
        throw rejects(error)
      }
      resolve(token as string)
    })
  })
}

export const verifyToken = ({ token, secretOrPublicKey }: { token: string; secretOrPublicKey: Secret }) => {
  return new Promise<TokenPayload>((resolve, rejects) => {
    jwt.verify(token, secretOrPublicKey, (error, decoded) => {
      if (error) {
        throw rejects(error)
      }
      resolve(decoded as TokenPayload)
    })
  })
}
