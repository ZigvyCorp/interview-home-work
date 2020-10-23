import jwt from "jsonwebtoken";
import { AppConfig } from "../config";

export function signJwt(user: any) {
  user = Object.assign({}, user, {
    password: undefined,
  });
  return jwt.sign({ user }, AppConfig.jwt.secretKey, {
    expiresIn: `${AppConfig.jwt.liveDays} days`,
  });
}
