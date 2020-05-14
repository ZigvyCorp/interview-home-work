import passport from "passport";
import JwtCookieComboStrategy from "passport-jwt-cookiecombo";
import { AppConfig } from "./config";

export const configPassport = () => {
  passport.use(
    new JwtCookieComboStrategy(
      {
        secretOrPublicKey: AppConfig.jwt.secretKey,
        passReqToCallback: false,
      },
      (payload: any, done: any) => {
        return done(null, payload.user);
      }
    )
  );
};
