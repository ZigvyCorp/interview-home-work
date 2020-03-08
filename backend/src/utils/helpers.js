import jwt from 'jsonwebtoken'

import config from '../config'

export const generateToken = payload =>
  jwt.sign(payload, config.auth.jwt.secret, {
    issuer: config.auth.jwt.issuer,
    audience: config.auth.jwt.audience,
    algorithm: config.auth.jwt.algorithm,
    expiresIn: config.auth.jwt.expiresIn,
  })
